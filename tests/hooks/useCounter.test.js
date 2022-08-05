import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );

        const { counter, fnIncrement, fnDecrement, fnReset } = result.current;

        expect( counter ).toBe( 10 );
        expect( fnIncrement ).toEqual( expect.any( Function ) );
        expect( fnDecrement ).toEqual( expect.any( Function ) );
        expect( fnReset ).toEqual( expect.any( Function ) );
    });

    test('Debe retornar el valor de 100 al enviárselo como parámetro', () => {
        const { result } = renderHook( () => useCounter(100) );

        const { counter, fnIncrement, fnDecrement, fnReset } = result.current;

        expect( counter ).toBe( 100 );
        expect( fnIncrement ).toEqual( expect.any( Function ) );
        expect( fnDecrement ).toEqual( expect.any( Function ) );
        expect( fnReset ).toEqual( expect.any( Function ) );
    });

    test('Debe retornar el valor de 100 al enviárselo como parámetro', () => {
        const { result } = renderHook( () => useCounter() );

        const { fnIncrement, fnDecrement, fnReset } = result.current;

        act(() => {
            fnIncrement();
            fnIncrement(3);
        });
        expect( result.current.counter ).toBe( 14 );

        act(() => {
            fnDecrement();
            fnDecrement(8);
            fnDecrement(1);
        });
        expect( result.current.counter ).toBe( 4 );

        

        act(() => {
            fnReset();
        });
        expect( result.current.counter ).toBe( 10 );
        act(() => {
            fnReset();
        });
        expect( result.current.counter ).toBe( 10 );
        act(() => {
            fnReset();
            fnReset();
        });
        expect( result.current.counter ).toBe( 10 );
    });
});