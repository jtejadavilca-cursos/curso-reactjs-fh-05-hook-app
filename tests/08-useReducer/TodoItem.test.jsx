import { fireEvent, render, screen } from "@testing-library/react";

import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas de TodoItem', () => {

    const todoTest = {
        id: 1,
        description: 'Todo Test',
        done: false
    };
    const onToggleTodo = jest.fn();
    const onRemoveTodo = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe mostrar los valores por defecto', () => {
        render( <TodoItem todo={todoTest} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />);

        expect( screen.getByLabelText('todo-description').innerHTML ).toContain(todoTest.description);
        expect( screen.getByLabelText('todo-description').className ).toContain('align-self-center');
        expect( screen.getByLabelText('todo-description').className ).not.toContain('text-decoration-line-through');
        expect( screen.getByRole('button', { name: 'Borrar' }) ).toBeTruthy();

    });

    test('Debe mostrar los valores por defecto - DONE True', () => {
        const todoTestTrue = {
            id: 2,
            description: 'Todo Test 2',
            done: true
        }
        render( <TodoItem todo={todoTestTrue} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} />);

        expect( screen.getByLabelText('todo-description').innerHTML ).toContain(todoTestTrue.description);
        expect( screen.getByLabelText('todo-description').className ).toContain('align-self-center');
        expect( screen.getByLabelText('todo-description').className ).toContain('text-decoration-line-through');
        expect( screen.getByRole('button', { name: 'Borrar' }) ).toBeTruthy();

    });

    test('Debe ejecutar la función onToggleTodo', () => {
        render( <TodoItem todo={todoTest} onToggleTodo={onToggleTodo} />);


        const spanTodo = screen.getByLabelText('todo-description');
        fireEvent.doubleClick( spanTodo );

        expect( onToggleTodo ).toBeCalledTimes(1);
        expect( onToggleTodo ).toBeCalledWith( todoTest.id );

    });

    test('Debe ejecutar la función onRemoveTodo', () => {
        render( <TodoItem todo={todoTest} onRemoveTodo={onRemoveTodo} />);


        const btnRemove = screen.getByRole('button', { name: 'Borrar' })
        fireEvent.click( btnRemove );

        expect( onRemoveTodo ).toBeCalledTimes(1);
        expect( onRemoveTodo ).toBeCalledWith( todoTest.id );

    });
});