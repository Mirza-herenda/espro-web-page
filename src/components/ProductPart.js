import React from "react";
import "../styles/ProductPart.css";
import { ProductList } from "./ProductList";
import { Button } from "@mui/material";
function ProductPart() {
  return (
    <div className="mainWrapper">
      <h1 className="ExploreProduct">EXPLORE OUR PRODUCTS</h1>
      <div className="wrapperOfProducts">
        {ProductList.map((obj) => {
          return (
            <div className="product" key={obj.id}>
              <img className="productImg" src={obj.img} alt="img"></img>
              <img
                className="productReplace"
                src={obj.replaceImg}
                style={{ backgroundColor: obj.colorReplace }}
                alt="imgReplace"
              ></img>
              <p className="ProjectTitle">{obj.name}</p>
              <Button className="ProjectButton">SHOP NOW</Button>
            </div>
          );
        })}
      </div>
      <Button className="ShopButton">SHOP ALL PRODUCTS</Button>
    </div>
  );
}

export default ProductPart;
