import { TodoItemsContext } from "../store/todo-items-store";
import Todoitemcompo from "./Todoitem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";

const TodoItems = ({ onDeleteClick }) => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitemcompo
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        ></Todoitemcompo>
      ))}
    </div>
  );
};

export default TodoItems;
