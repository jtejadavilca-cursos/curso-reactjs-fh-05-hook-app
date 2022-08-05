import {useState} from 'react';

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);

    const fnIncrement = ( value = 1 ) => setCounter(current => current + value);
    const fnDecrement = ( value = 1 ) => setCounter(current => current - value);
    const fnReset = () => setCounter(initialValue);

    return {
        counter,
        fnIncrement,
        fnDecrement,
        fnReset
    }
}