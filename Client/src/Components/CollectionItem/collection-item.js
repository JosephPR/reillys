import React from "react";
import { connect } from "react-redux"

import CustomButton from "../CustomButton/custom-button"
import { addItem } from "../../Redux/Cart/cart.actions"

import "./collection-item.scss"

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }} />
        <div className="colection-footer">
        <span className="name"> { name }</span>
        <span className="price"> { price }</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
