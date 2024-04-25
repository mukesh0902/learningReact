import Todoitemcompo from "./Todoitem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <Todoitemcompo
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></Todoitemcompo>
      ))}
    </div>
  );
};

export default TodoItems;
