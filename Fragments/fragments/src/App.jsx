import Fooditems from "./components/Fooditems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container.jsx";
import FoodInput from "./components/FoodInput.jsx";
import { useState } from "react";

function App() {
   let[foodItems, setFoodItems]=useState([]);

  const onKeyDown = (event) =>{
    if (event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  }
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems} />
        <Fooditems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
