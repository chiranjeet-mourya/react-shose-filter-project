import React from 'react';
import "./Category.css"
import Input from '../../components/Input';

function Category({handleChange}) {
  return (
    <>
    <div>
      <h2 className="sidebar_title">Category</h2>
   <div>
   <label className="sidebar_label_container">
    <input onChange={handleChange} type="radio" name="test" value="" />
    <span className="checkmark"></span>All
   </label>

   <Input
   handleChange={handleChange}
   value="sneakers"
   title="Sneakers"
   name="test"/>
   <Input
   handleChange={handleChange}
   value="flats"
   title="Flats"
   name="test"/>
   <Input
   handleChange={handleChange}
   value="sandals"
   title="Sandals"
   name="test"/>
   <Input
   handleChange={handleChange}
   value="heels"
   title="Heels"
   name="test"/>
   </div>
  </div>
    </>
  )
}

export default Category;