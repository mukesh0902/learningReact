import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="row justify-content-md-center"></div>
      <div className="row myrow align-items-center">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Task Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mybtn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
