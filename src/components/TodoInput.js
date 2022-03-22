import { useState } from "react";

const TodoInput = () => {
  const [InputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={InputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
    </div>
  );
};

export default TodoInput;
