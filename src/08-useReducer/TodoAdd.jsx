import React, { useRef } from 'react'

export const TodoAdd = ({emmitAddTodo}) => {

    const inputTodo = useRef();

    const onSubmit = (e) => e.preventDefault();

    const onAddTodo = () => {
        const desctTodo = inputTodo.current.value.trim();
        if(desctTodo.length < 1) return;

        emmitAddTodo({
            id: new Date().getTime(),
            todo: desctTodo,
            done: false
        });
        inputTodo.current.value = '';
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={onSubmit} action="">
                <input
                    ref={inputTodo}
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                    onClick={() => onAddTodo()}
                >
                    Agregar
                </button>

            </form>
        </>
    )
}
