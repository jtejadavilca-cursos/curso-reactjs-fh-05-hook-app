import {useCounter} from '../hooks/useCounter';


export const CounterWithCustomHook = () => {

    const { counter, fnIncrement, fnDecrement, fnReset } = useCounter(10);

    return (
        <>
            <h1>Counter with CustomHook : {counter}</h1>

            <hr />

            <button className="btn btn-primary" onClick={() => fnIncrement()}>+1</button>
            <button className="btn btn-primary" onClick={() => fnReset()}>Reset</button>
            <button className="btn btn-primary" onClick={() => fnDecrement()}>-1</button>

        </>
    )
}
