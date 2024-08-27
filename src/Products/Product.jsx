import React from 'react';
import "./Product.css"

function Product({result}) {
  return (
    <>
    <section className="card_container">
     {
      result
     }
    </section>
    </>
  )
}

export default Product;