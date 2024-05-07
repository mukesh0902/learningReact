import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TodoItemsContext } from "../store/todo-items-store";

function Todoitemcompo({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="row myrow align-items-center">
      <div className="col-6 align-items-center">{todoName}</div>
      <div className="col-4 align-items-center">{todoDate}</div>
      <div className="col-2 align-items-center">
        <button
          type="button"
          className="btn btn-danger mybtn"
          onClick={() => deleteItem(todoName)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default Todoitemcompo;
