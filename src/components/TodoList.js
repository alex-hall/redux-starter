import React from 'react'
import {number, bool, string, arrayOf, shape, func} from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>)}
    </ul>
)

TodoList.propTypes = {
    todos: arrayOf(
        shape({
            id: number.isRequired,
            completed: bool.isRequired,
            text: string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: func.isRequired
}

export default TodoList