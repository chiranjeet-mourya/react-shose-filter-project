import React from 'react'
// import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

function Cart({img,title,star,reviews,prevPrice,newPrice,key}) {
  // console.log(JSON.stringify(title));
  return (
   <>
   <section className="card">
        <img src={img} className="card_img" alt={title} />
        <div className="card_detalis">
          <h3 className="card_title">{title}</h3>
          <section className="card_reviews">
            {star} {star} {star} {star}
            <span className="total_reviews">{reviews}</span>
          </section>
          <section className="card_price">
            <div className="price">
              <del>{prevPrice}</del> <strong>{newPrice}</strong>
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag_icons"/>
            </div>
          </section>
        </div>
      </section>
   </>
  )
}

export default Cart;