import React from "react";

function TodoItem({todo, number}) {
    return(
        <div>
            {number}. {todo.title}
        </div>
    )
}

export default TodoItem
