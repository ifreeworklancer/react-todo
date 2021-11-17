import React, {useEffect, useState} from "react";
import TodoList from "../components/todo/list/TodoList";
import TodoService from "../api/TodoService";

function TodoPage() {
    const [todoList, setTodoList] = useState([]);

    async function getTodoList() {
        const response = await TodoService.getTodoList();
        setTodoList(response)
    }

    useEffect(() => {
        getTodoList()
    }, [])

    return(
      <section className="todo-page">
          <div className="container">
            <TodoList todoList={todoList} />
          </div>
      </section>
    )
}

export default TodoPage;
