import React from 'react'
import Todoinput from './Todoinput';
import Todo from './Todo'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSelector, useDispatch} from 'react-redux';
import {completeTodo, addTodo, deleteTodo} from "../Redux/action";

function TodoList() {
   const state = useSelector((state) => ({...state.todos}))
  const dispatch = useDispatch();
  const create=(newTodo)=>{
      dispatch(addTodo(newTodo))
  }
    return (
        <div>
            <>
            <Todoinput createTodo={create}/>

            <ol > 
                <TransitionGroup>
                   {state.todos && state.todos.map((todo)=>{
                       return(
                           <CSSTransition key={todo.id} className="todo">
                               <Todo key={todo.id}
                               id={todo.id}
                               task={todo.task}
                               completed={todo.completed}
                               toggleTodos={()=>dispatch(completeTodo(todo))}
                               deleteTodo={()=>dispatch(deleteTodo(todo))}
                               />
                           </CSSTransition>
                       )
                   })}
                      
                </TransitionGroup>


            </ol>
            </>
        </div>
    )
}

export default TodoList
