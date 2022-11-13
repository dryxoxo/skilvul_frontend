import React from "react";

export default function ListTodo() {
  return (
    <>
      <div className="my-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label className="form-check-label" for="flexCheckChecked">
            Todo 1
          </label>
        </div>
      </div>
    </>
  );
}
