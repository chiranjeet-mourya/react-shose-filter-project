import React from 'react';
import "./Sidebar.css"
import Category from "./Category/Category"
import Prices from "./Prices/Prices"
import Color from "./Color/Color"

function Sidebar({handleChange}) {
  // console.log(handleChange);
  return (
    <>
    <section className="sidebar">
        <div className="logo_container">
            <h1>🛒</h1>
        </div>

        <Category handleChange={handleChange}/>
        <Prices handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar;