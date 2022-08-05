import { useTodo } from '../hooks/useTodo';
import {
    TodoAdd,
    TodoList,
} from './';



export const TodoApp = () => {

    const {todos, todosTotalCount, todosPendingCount, handleAddTodo, handleRemoveTodo, handleToggleTodo} = useTodo();
    
    return (
        <>
            <h1>TodoApp ({todosTotalCount}) <small>pendientes: {todosPendingCount}</small></h1>

            <hr />

            <div className="row">
                <div className="col-6">
                    {
                        <TodoList
                            todoList={todos}
                            onRemoveTodo={handleRemoveTodo}
                            onToggleTodo={handleToggleTodo}
                        />
                    }
                </div>

                <div className="col-6">
                    <TodoAdd emmitAddTodo={handleAddTodo} />
                </div>
            </div>

        </>
    )
}
