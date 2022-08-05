import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock( '../../src/hooks/useCounter' );
jest.mock( '../../src/hooks/useFetch' );

describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    const returnCounter = {
        counter: 1,
        fnIncrement: mockIncrement
    };

    beforeEach( () => {
        jest.clearAllMocks();
    });

    useCounter.mockReturnValue(returnCounter);

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render( <MultipleCustomHooks /> );

        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain('BreakingBad Quotes');
        expect( screen.getByLabelText('div-loading').innerHTML ).toContain('Loading');

    });

    test('Debe de mostrar un Quote', () => {
        const dataQuote =  {
            author: "José Tejada",
            quote: "This is my own Quote!",
        };

        useFetch.mockReturnValue({
            data: [dataQuote],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('José Tejada') ).toBeTruthy();
        expect( screen.getByText('This is my own Quote!') ).toBeTruthy();
    });

    test('Debe de llamar a la función de incrementar para pasar a la siguiente página', () => {
        const dataQuotePage1 =  {
            author: "José Tejada",
            quote: "This is my own Quote!",
        };

        useFetch.mockReturnValue({
            data: [dataQuotePage1],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole( 'button', { name: 'Siguiente' } );
        fireEvent.click( nextButton );

        expect( returnCounter.fnIncrement ).toHaveBeenCalledTimes(1);

    });

});