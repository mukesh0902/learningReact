function Todoitemcompo({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row myrow align-items-center">
      <div className="col-6 align-items-center">{todoName}</div>
      <div className="col-4 align-items-center">{todoDate}</div>
      <div className="col-2 align-items-center">
        <button
          type="button"
          className="btn btn-danger mybtn"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitemcompo;
