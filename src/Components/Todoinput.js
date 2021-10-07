import React, { useState } from "react";


function Todoinput({ createTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(input);
    setInput("");
  };

  return (
    <div className="container-fluid">
      <div className="card text-center">
        <div className="card-header">
          <div className="card-body">
            <h5 className="card-title">Today TO_DO's</h5>
            <form  onSubmit={handleSubmit}>
              <div className="ui input">
                <input
                  type="text"
                  placeholder="enter your To-Do's"
                  className="form-control"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </div>
              <br></br>
              <button className="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
      <h1>Have a GoodDay!! your To-Do's</h1>
    </div>
  );
}

export default Todoinput;
