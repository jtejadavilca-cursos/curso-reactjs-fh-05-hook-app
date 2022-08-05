import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Prebas del todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Test TODO',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un TODO', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Test TODO 2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect( newState.length ).toBe( 2 );
        expect( newState[ 1 ].id ).toBe( 2 );
        expect( newState[ 1 ].description ).toBe( 'Test TODO 2' );
        expect( newState[ 1 ].done ).toBe( false );
        expect( newState ).toContain( action.payload );
    });

    test('Debe de remover un TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect( newState.length ).toBe( 0 );
    });

    test('Debe de actualizar el estado de un TODO', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect( newState.length ).toBe( 1 );
        expect( newState[ 0 ].id ).toBe( 1 );
        expect( newState[ 0 ].description ).toBe( 'Test TODO' );
        expect( newState[ 0 ].done ).toBe( true );



        const newState2 = todoReducer(newState, action);

        expect( newState2.length ).toBe( 1 );
        expect( newState2[ 0 ].id ).toBe( 1 );
        expect( newState2[ 0 ].description ).toBe( 'Test TODO' );
        expect( newState2[ 0 ].done ).toBe( false );
    });
});