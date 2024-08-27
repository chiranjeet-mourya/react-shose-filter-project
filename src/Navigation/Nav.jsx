import React from 'react';
import "./Nav.css"
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";

function Nav(handleChange) {
  return (
    <>
    <nav>
      <div className="container">
        <input onChange={()=>handleChange()} type="text" className="search_input" placeholder="Enter your search shose..."/>
      </div>

      <div className="profile_container">
        <a href="#">
          <FiHeart className="nav_icons"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav_icons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav_icons"/>
        </a>
      </div>
    </nav>
    </>
  )
}

export default Nav;