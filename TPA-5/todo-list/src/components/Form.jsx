import React, { useState } from "react";

const Form = () => {
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };

    console.log(todoObj);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="add Todo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
