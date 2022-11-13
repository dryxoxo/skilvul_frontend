import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { addTodo } from "../redux/actions/todoAction";
import Filter from "./Filter";
import ListTodo from "./ListTodo";

export default function InputTodo() {
  const [Addtodo, setAddTodo] = useState("");

  const dispatch = useDispatch();

  const handlingSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      title: Addtodo,
      completed: false,
    };
    
    dispatch(addTodo(todoObj));
    setAddTodo("");
  };

  const handlingInput = (e) => {
    setAddTodo(e.target.value);
  };

  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col-sm-3 my-auto mx-auto">
          <h1 className="mb-2 text-center">Todo List</h1>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="add ur todo"
              value={Addtodo}
              onChange={handlingInput}
            />
            <button className="btn btn-primary" onClick={handlingSubmit}>
              add
            </button>
          </div>
          {/* <ListTodo /> */}
          <Outlet />
          <Filter />
        </div>
      </div>
    </div>
  );
}
