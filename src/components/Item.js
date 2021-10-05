import React,{useState} from "react";


function Item({ name, category }) {
  const [isInCart,setIsInCart]= useState(false)
  const className= isInCart ? "in-cart" : "";
  function handleClick(){
    
    setIsInCart((isInCart)=> !isInCart)
    }
   
  return (
    <li className= {className}>
      
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
