import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo, updateCheck } from "../redux/actions/todoAction";

export default function CardTodo({id, title, completed}) {
  const [editVisible, setEditVisible] = useState(false);
  const [editName, setEditName] = useState("")
  const dispatch = useDispatch()

  const handlingEdit = () => {
    setEditVisible(!editVisible);
    console.log(editVisible);
  };

  const handlingSubmit = (e) => {
    e.preventDefault();
    let dataObj = {
        id: id,
        title: editName,
        completed: completed
    }

    console.log(dataObj);
    setEditName("");
    dispatch(updateTodo(dataObj))
    setEditVisible(!editVisible);
  };

  const handlingInput = (e) => {
    setEditName(e.target.value);
  };

  const handlingDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handlingCheck = (data) => {
    dispatch(updateCheck(data));
  };

  return (
    <>
      {editVisible == true ? (
        <>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder={title} value={editName} onChange={handlingInput}/>
        <button type="submit" className="btn btn-primary" onClick={handlingSubmit}> update</button>
        <button className="btn btn-danger" onClick={handlingEdit}>cancel</button>
        </div>
        </>
      ) : (
        <>
          <div className="form-check me-auto">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked={completed}
              onChange={() => handlingCheck(id)}
            />
            <label className="form-check-label">
              {completed == true ? <del>{title}</del> : title}
            </label>
          </div>
          <div>
            <i
              className="fa-solid fa-square-pen mx-2"
              onClick={handlingEdit}
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => handlingDelete(id)}
            ></i>
          </div>
        </>
      )}
    </>
  );
}
