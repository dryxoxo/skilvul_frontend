import React from "react";
import { Link } from "react-router-dom";

export default function Filter() {
  return (
    <>
      <div className="mt-2 text-center">
        {/* <button className='btn btn-light mb-1'>All</button>
    <button className='btn btn-light mx-1 mb-1'>Completed</button>
    <button className='btn btn-light mb-1'>Not Yet</button> */}
        <Link to={"/all"} className="btn btn-light mb-1">
          All
        </Link>
        <Link to={"/completed"} className="btn btn-light mx-1 mb-1">
          Completed
        </Link>
        <Link to={"/notyet"} className="btn btn-light mb-1">
          Not Yet
        </Link>
      </div>
    </>
  );
}
