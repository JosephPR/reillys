import React from 'react';

import CustomButton from '../CustomButton/custom-button'

import './collection-item.scss'

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }} />
        <div className='colection-footer'>
        <span className='name'> { name }</span>
        <span className='price'> { price }</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem;
