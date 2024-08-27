import React from 'react';
import "./Recommended.css"
import Button from '../components/Button';

function Recommended({handleClick}) {
  return (
    <>
    <div>
      <h2 className="recommeded_title">Recommeded</h2>
      <div className="recommeded_flex">
       <Button onClickHandler={handleClick} value="" title="All Products"/>
       <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
       <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
       <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
       <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
    </>
  )
}

export default Recommended;