import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer";

import { useTodo } from '../../src/hooks/useTodo';

jest.mock( '../../src/hooks/useTodo' );

describe('Pruebas del <TodoApp />', () => {


    const todos = [
        { id: 1, todo: 'Todo Test 1', done: false },
        { id: 2, todo: 'Todo Test 2', done: false },
        { id: 3, todo: 'Todo Test 3', done: true },
        { id: 4, todo: 'Todo Test 4', done: false },
    ];
    const todosTotalCount = todos.length;
    const todosPendingCount = todos.filter(t => !t.done).length;
    const handleAddTodo = jest.fn();
    const handleRemoveTodo = jest.fn();
    const handleToggleTodo = jest.fn();

    useTodo.mockReturnValue({
        todos,
        todosTotalCount,
        todosPendingCount,
        handleAddTodo,
        handleRemoveTodo,
        handleToggleTodo
    });

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente correctamente', () => {
        render( <TodoApp /> );

        const title = `TodoApp (${todos.length}) <small>pendientes: ${todosPendingCount}</small>`;
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );


        expect( screen.getByRole( 'list' ).childElementCount ).toBe( 4 );
        expect( screen.getAllByLabelText( 'todo-description' )[0].className ).not.toContain( 'text-decoration-line-through' );
        expect( screen.getAllByLabelText( 'todo-description' )[1].className ).not.toContain( 'text-decoration-line-through' );
        expect( screen.getAllByLabelText( 'todo-description' )[2].className ).toContain( 'text-decoration-line-through' );
        expect( screen.getAllByLabelText( 'todo-description' )[3].className ).not.toContain( 'text-decoration-line-through' );

        expect( screen.getByText('Todo Test 1') ).toBeTruthy();
        expect( screen.getByText('Todo Test 2') ).toBeTruthy();
        expect( screen.getByText('Todo Test 3') ).toBeTruthy();
        expect( screen.getByText('Todo Test 4') ).toBeTruthy();

    });

});