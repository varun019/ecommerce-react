import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";


const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct : {},
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url)=>{
    dispatch({ type: "SET_SINGLE_LOADING" });
    try{
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
    }
    catch(error){
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct}}>{children}</AppContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(AppContext);
};
