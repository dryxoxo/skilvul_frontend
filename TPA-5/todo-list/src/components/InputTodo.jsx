import React, { useState } from "react";
import Filter from "./Filter";
import ListTodo from "./ListTodo";

export default function InputTodo() {
  const [Addtodo, setAddTodo] = useState("");

  const handlingSubmit = (e) => {
    e.preventDefault();
    console.log(Addtodo);
    setAddTodo("");
  };

  const handlingInput = (e) => {
    setAddTodo(e.target.value);
  };
  return (
    <>
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
          <ListTodo/>
          <Filter/>

        </div>
      </div>
    </>
  );
}
