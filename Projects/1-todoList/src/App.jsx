import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Todoitemcompo from "./components/Todoitem";
import WelcomeMsg from "./components/welcomemsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="container container-sm container-md container-lg text-center">
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
