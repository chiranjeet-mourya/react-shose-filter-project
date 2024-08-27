import React from "react";
import "./color.css";
import Input from "../../components/Input";

function Color({ handleChange }) {
  return (
    <>
      <div className="center">
        <h2 className="sidebar_title color_title">Color</h2>

        <label className="sidebar_label_container">
          <input onChange={handleChange} type="radio" name="test1" value="" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar_label_container">
          <input onChange={handleChange} type="radio" name="test1" value="white" />
          <span className="checkmark" style={{background:"white",border:"2px solid black"}}></span>White
        </label>
      </div>
    </>
  );
}

export default Color;
