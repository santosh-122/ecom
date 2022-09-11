import React from 'react';
import "./productcard.css";

const Productcard = ({product}) => {
  return (
    <div>
    <div>
      <img className='productcard__img' src={product.image} alt='' />
      <h4>{product.name}</h4>
      <div className='productcard__price'><h5>{product.price}</h5></div>
    </div>
    </div>
  );
}

export default Productcard;
