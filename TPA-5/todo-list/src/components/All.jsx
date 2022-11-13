import React from "react";
import { useSelector } from "react-redux";
import CardTodo from "./CardTodo";


export default function All() {
  const state = useSelector((state) => state);

  return (
    <>
      {state.map(({ id, title, completed }, key) => (
        <div className="d-flex my-3" key={key}>
          <CardTodo id={id} title={title} completed={completed}/>
        </div>
      ))}
    </>
  );
}
