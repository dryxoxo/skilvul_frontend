import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateCheck } from "../redux/actions/todoAction";
import CardTodo from "./CardTodo";

export default function ListTodo() {
  const state = useSelector((state) => state);
  const [editVisible, setEditVisible] = useState(false);

  const dispatch = useDispatch();

  const handlingDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handlingCheck = (data) => {
    dispatch(updateCheck(data));
  };

  const handlingEdit = () => {
    setEditVisible(!editVisible);
    console.log(editVisible);
  };

  console.log(state);

  return (
    <>
      <div className="my-3">
        {state.map((el, key) => (
          <div key={key} className="d-flex">
            <CardTodo id={el.id} title={el.title} completed={el.completed} />
          </div>
        ))}
      </div>
    </>
  );
}
