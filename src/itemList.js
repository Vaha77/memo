import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
function ToDoListItem({ todo, onRemove }) {
  const { id, text, checked } = todo;
  return (
    <li className="TodoListItem">
      <div className={("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="edit">
        <MdModeEditOutline />
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </li>
  );
}

export default ToDoListItem;
