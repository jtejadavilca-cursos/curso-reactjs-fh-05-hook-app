import { TodoItem } from './'

export const TodoList = ({todoList = [], onRemoveTodo, onToggleTodo}) => {

    return (
        <ul className="list-group">
            {
                todoList.map(todo => 
                    (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onRemoveTodo={onRemoveTodo}
                            onToggleTodo={onToggleTodo} 
                        />
                    )
                )
            }
        </ul>
    )
}
