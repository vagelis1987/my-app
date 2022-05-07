import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () =>{
   const products = useSelector((state)=>state.allProducts.products); 
   const renderMyList = products.map((products)=>{
     const {id, title, price , category} = products
     
     return(
      <div className="four wide column" key={id}>
       <Link to={`/product/${id}`}>
        <div className="ui link cards">
            <div className="card">
               <div className="content">
                 <div className="header">
                 {title}
                 </div>
                 <div className="meta price">${price}</div>
                    <div className="meta">{category}</div>
               </div>   
            </div>
        </div>
        </Link>
      </div>
    )

    })
    return <>{renderMyList}</>;  

}

export default  ProductComponent;