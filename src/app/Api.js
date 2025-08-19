import Axios from "axios";

// --------------------------------------------------------------------------
// ToDo : Base Url Server
const BaseURL = "http://localhost:4000/";
// const BaseURL = "http://103.10.234.158:8800/";
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// ToDo : Authentication Apis
// ? Variables for the auth api

const loginUser = "user/login";
const signupUser = "user/signup";


// ? Export Function the auth api path variables
export const loginUserAPI = () => `${BaseURL}${loginUser}`;
export const signupUserAPI = () => `${BaseURL}${signupUser}`;


// ----------------------------------------------------------------

// ----------------------------------------------------------------

// TODO: User Resume And Details Apis
// TODO: For Product Page Details Apis

const AddProduct = "product/addproduct";
const GetAllProduct = "product/getallproducts";
const GetProduct = "product/getproduct";
const UpdateProduct = "product/updateproduct";
const DeleteProduct = "product/deleteProduct";

//  Export Function the Product api paths variables

export const AddProductAPI = () => `${BaseURL}${AddProduct}`;
export const GetAllProductAPI = () => `${BaseURL}${GetAllProduct}`;
export const GetProductAPI = () => `${BaseURL}${GetProduct}`;
export const UpdateProductAPI = () => `${BaseURL}${UpdateProduct}`;
export const DeleteProductAPI = () => `${BaseURL}${DeleteProduct}`;

// ----------------------------------------------------------------

// ----------------------------------------------------------------
// TODO: FetchAPI function
export const FetchAPI = async (apiLink, fetchType, sentData) => {
  const res = await Axios({
    url: apiLink,
    method: fetchType,
    data: sentData,
    headers:('Content-Type', 'application/json')
  })
    .then((response) => response)
    .catch((err) => err.response);

  const data = await res?.data;

  return { res, data };
};

// ? Token base ApiCall function
export const TokenBaseFetchApi = async (
  apiLink,
  fetchType,
  sentData,
  token
) => {
  const res = await Axios({
    url: apiLink,
    method: fetchType,
    data: sentData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response)
    .catch((err) => err.response);

  const data = await res?.data;

  return { res, data };
};
// ----------------------------------------------------------------

// For Image Base url 

export const ImageBaseUrl = "http://localhost:4000/public/images/"