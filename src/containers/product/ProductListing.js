import React, { useEffect} from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import {setProcucts} from '../../redux/actions/productActions'
import ProductComponent from "./ProductComponent";


const ProductListing = () =>{
  const dispatch = useDispatch();
  
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log("Err",err);
    });
    dispatch(setProcucts(response.data))
  }
  
  useEffect(()=>{
    getProducts()  
  },[]);


return(
  <div className="ui grid container">
   <ProductComponent />
  </div>
)
}

export default  ProductListing;