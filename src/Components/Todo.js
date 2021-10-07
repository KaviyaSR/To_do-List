import React from "react";
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodos, completed, task, id, deleteTodo }) => {
  return (
    <>
      <TransitionGroup className={completed ? "Todo" : "Todo.completed"}>
        <CSSTransition className="card-header" key="normal" timeout={500}>
          <ul className="list-group">
            <li className="list-group-item" onClick={toggleTodos}>
              {task}
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-primary me-md-2 "
                  onClick={deleteTodo}
                >
                  <i className="fas fa-trash" />
                </button>
              </div>
            </li>
          </ul>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Todo;
