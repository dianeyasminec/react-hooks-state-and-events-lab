import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const[selectedCategory,setSelectedCategory]= useState(false)

//const Items= selectedCategory? "item.name" : ""
console.log(items)
let categories =items.filter((item)=>{
  console.log("item",item)
})
 function handleSelect(event){
   setSelectedCategory(event.target.value)
   console.log('SELECT', selectedCategory)
   //items.filter(setSelectedCategory((setSelectedCategory)=> !setSelectedCategory))
 }
  return (
    <div className="ShoppingList">
      <div  className="Filter">
        <select onChange={handleSelect}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
