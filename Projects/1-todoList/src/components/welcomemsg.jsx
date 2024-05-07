import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./welcomemsg.module.css";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};
export default WelcomeMsg;
