import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';

const ProductDetails = () => {
  const { productId } = useParams();
 
  let productDetails = useSelector((state) =>   state.product); 
  const {  title, price, category, description } = productDetails;

  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
  
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(productDetails).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
        <Link to="/product">
     <Button variant="outlined">
      Back
     </Button>
 </Link> 
        <div className="ui placeholder segment">
        
          <div className="ui two column stackable center aligned grid">
              
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
            
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );

};


export default  ProductDetails;