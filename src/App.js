import React, { useState } from 'react';
import "./App.css"
import Navigation from './Navigation/Nav'
import Product from './Products/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar';
import Cart from './components/Cart';

//---------Database---------
import products from "./db/data"

function App() {

  const [selectCotegory,setselectCotegory] = useState('');
  const [query,setQuery] = useState("");


  //-----------input Filter--------------
  const hendleInputChange = event=>{
    setQuery(event.target.value);
    console.log(event.target.value);
  }

  const filtereditems = products.filter((products) => 
    products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!== -1
);

 //-----------Radio Filter--------------
 const handleChange = event =>{
  setselectCotegory(event.target.value)
 }

 //-----------Button Filter--------------
 const handleClick = event =>{
  console.log(event.target.value);
  setselectCotegory(event.target.value)
 }

 function filterData(products,selected,query){
  let filterProduct = products
  //---------Filter input Items----------
  if(query){
    filterProduct = filtereditems
  }

   //---------Selected Filter----------
   if(selected){
    filterProduct = filterProduct.filter(
      ({category,color,company,newPrice,title}) => 
        category === selected || 
        color === selected ||
        company === selected || 
        newPrice === selected || 
        title == selected);
   }  

   return filterProduct.map(
      ({img,title,star,reviews,prevPrice,newPrice}) =>(
      <Cart 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice} 
      newPrice={newPrice}
      />
     )
    )
 }
 const result = filterData(products,selectCotegory,query)
//  console.log(result);

  return (
    <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query} hendleInputChange={hendleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Product result={result}/>
    </>
  )
}

export default App