"use client";

import React, { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import * as THREE from "three";

// Helper: choose correct GLB
const getGLBPath = (material: string) => {
  switch (material) {
    case "Wood":
      return "/GLB/wood.glb";
    case "Metal":
      return "/GLB/metal.glb";
    case "Canvas":
      return "/GLB/canvas.glb";
    default:
      return "/GLB/wood.glb";
  }
};

const TARGET_SIZE = 2;

interface ModelProps {
  imageUrl: string;
  material: string;
  onLoaded: (scene: THREE.Group) => void;
}

const Model: React.FC<ModelProps> = ({ imageUrl, material, onLoaded }) => {
  const glbPath = getGLBPath(material);
  const { scene } = useGLTF(glbPath);
  const texture = useTexture(imageUrl);
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.offset.set(0, 0);
    texture.repeat.set(1, 1);

    // adjust aspect ratio for Acrylic
    const adjustTexture = () => {
      const image = texture.image as HTMLImageElement | undefined;
      if (material === "Acrylic" && image) {
        const aspect = image.width / image.height;
        if (aspect > 1) {
          texture.repeat.set(1, 1 / aspect);
          texture.offset.set(0, (1 - 1 / aspect) / 2);
        } else {
          texture.repeat.set(aspect, 1);
          texture.offset.set((1 - aspect) / 2, 0);
        }
      }
    };

    if (texture.image) {
      adjustTexture();
    }

    let textureApplied = false;

    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const meshName = mesh.name.toLowerCase();
        const materialName = (mesh.material as THREE.Material)?.name?.toLowerCase?.() || "";

        const isFront =
          meshName.includes("front") ||
          materialName.includes("front") ||
          meshName.includes("photo") ||
          meshName.includes("image") ||
          meshName.includes("picture");

        if (isFront) {
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: material === "Metal" ? 0.9 : 0.1,
            roughness: material === "Metal" ? 0.4 : 0.8,
            envMapIntensity: 0.8,
          });
          textureApplied = true;
        } else {
          mesh.material = new THREE.MeshStandardMaterial({
            color: "#ffffff",
            metalness: 0.1,
            roughness: 0.9,
          });
        }
      }
    });

    // fallback if no mesh matched
    if (!textureApplied) {
      scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh && !textureApplied) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: material === "Metal" ? 0.9 : 0.1,
            roughness: material === "Metal" ? 0.4 : 0.8,
            envMapIntensity: 0.8,
          });
          textureApplied = true;
        }
      });
    }

    // scale and center
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = TARGET_SIZE / maxDimension;
    scene.scale.setScalar(scale);

    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);

    onLoaded(scene);
  }, [scene, texture, material, onLoaded]);

  return <primitive object={scene} />;
};

interface ViewerCanvasProps {
  imageUrl: string;
  selectedMaterial: string;
}

const ViewerCanvas: React.FC<ViewerCanvasProps> = ({ imageUrl, selectedMaterial }) => {
  const controlsRef = useRef<OrbitControlsType | null>(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2;
  }, [gl]);

  const handleModelLoaded = useCallback(
    (scene: THREE.Group) => {
      camera.position.set(0, 0, 3);
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      box.getCenter(center);

      if (controlsRef.current) {
        controlsRef.current.target.copy(center);
        controlsRef.current.update();
      }
    },
    [camera]
  );

  return (
    <>
      <ambientLight position={[0, 0, 5]} intensity={1.3} />
      <directionalLight position={[0.5, 0.5, 6]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model imageUrl={imageUrl} material={selectedMaterial} onLoaded={handleModelLoaded} />
      </Suspense>
      <OrbitControls ref={controlsRef} enableZoom />
    </>
  );
};

interface ThreeImageViewerProps {
  imageUrl: string;
  selectedMaterial: string;
}

const ThreeImageViewer: React.FC<ThreeImageViewerProps> = ({ imageUrl, selectedMaterial }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <div style={{ width: "100%", height: "500px", backgroundColor: "black" }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        shadows
        gl={{ antialias: true }}
        style={{ background: "#000000" }}
      >
        <ViewerCanvas imageUrl={imageUrl} selectedMaterial={selectedMaterial} />
      </Canvas>
    </div>
  );
};

export default ThreeImageViewer;
