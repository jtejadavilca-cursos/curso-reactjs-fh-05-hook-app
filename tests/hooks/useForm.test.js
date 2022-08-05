import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {
    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook( () => useForm() );

        const { formState, onInputChange, onResetForm} = result.current;

        expect( formState ).toEqual( expect.any( Object ) );
        expect( Object.keys(formState).length ).toBe( 0 );
        expect( onInputChange ).toEqual( expect.any( Function ) );
        expect( onResetForm ).toEqual( expect.any( Function ) );

    });

    test('Debe regresar los valores segun el parametro de entrada', () => {
        const initialForm = {
            name: 'Jose',
            email: 'jose@gmail.com'
        };

        const { result } = renderHook( () => useForm(initialForm) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        });

        const { formState } = result.current;

        expect( formState ).toEqual( initialForm );
        expect( Object.keys(formState).length ).toBe( 2 );

    });

    test('Debe de cambiar el campo nombre del formulario', () => {

        const { result } = renderHook( () => useForm( {} ) );

        const { formState, onInputChange, onResetForm} = result.current;

        const event1 = {
            target: {
                name: 'name',
                value: 'Linda'
            }
        };

        act( () => onInputChange(event1));

        expect( result.current.name ). toBe('Linda');
        expect( result.current.formState.name ). toBe('Linda');



        const event2 = {
            target: {
                name: 'name',
                value: 'Juan'
            }
        };
        act( () => onInputChange(event2));

        expect( result.current.name ). toBe('Juan');
        expect( result.current.formState.name ). toBe('Juan');

    });

    test('Debe de cambiar el campo nombre del formulario', () => {
        const initialForm = {
            name: 'Jose',
            email: 'jose@gmail.com'
        };

        const { result } = renderHook( () => useForm( initialForm ) );

        const { onInputChange, onResetForm} = result.current;

        const event1 = {
            target: {
                name: 'name',
                value: 'Linda'
            }
        };

        act( () => onInputChange(event1));

        expect( result.current.name ). toBe('Linda');
        expect( result.current.formState.name ). toBe('Linda');

        act( () => onResetForm());

        expect( result.current.formState ).toEqual(initialForm);

    });
});
