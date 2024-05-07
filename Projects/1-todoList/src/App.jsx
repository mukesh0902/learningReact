import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import Todoitemcompo from "./components/Todoitem";
import WelcomeMsg from "./components/welcomemsg";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container container-sm container-md container-lg">
      <center className="todo-container">
        <TodoItemsContext.Provider
          value={{ todoItems, addNewItem, deleteItem }}
        >
          <AppName></AppName>
          <AddTodo></AddTodo>
          <WelcomeMsg></WelcomeMsg>
          <TodoItems></TodoItems>
        </TodoItemsContext.Provider>
      </center>
    </div>
  );
}

export default App;
