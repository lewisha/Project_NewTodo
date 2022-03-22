import React, { useState } from "react";
import ReactDom from "react-dom";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";

const Todo = () => {
  return (
    <div>
      <TodoHeader />
      <TodoInput inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  );
};

export default Todo;
