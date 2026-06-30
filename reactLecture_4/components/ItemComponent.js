import React from "react";
import ReactDom from "react-dom/client";
import "./item.css";

const ItemComponent = () => {
  return (
    <div id="item">
      <div className="topBox">
        <div id="imageBox">image</div>
        <div id="priceBox">Price : xxxxx$</div>
      </div>
      <div className="bottomBox">
        <div className="leftBox">
          <div className="wishList">add to wishlist</div>
          <div className="addCart">add to cart</div>
        </div>
        <div className="rightBox">
          <div className="byNow">by now</div>
        </div>
      </div>
    </div>
  );
};
export default ItemComponent;
