import Item from "./Item.jsx";
import { useState } from "react";

const Fooditems = ({items})=>{
  let [activeItems, setActiveItems]= useState([]);
  let onBuyButton = (item, event)=>{
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

return(
  <ul className="list-group">
  {items.map((item) => (
   <Item 
   key ={item}
  foodItem={item}
  bought = {activeItems.includes(item)}
  handleBuyButton ={(event) => onBuyButton(item, event,)}></Item>
  ))}
 </ul>
);

};

export default Fooditems;
