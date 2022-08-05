import { useEffect } from 'react'
import {
    useCounter,
    useFetch
} from '../hooks/';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, fnIncrement, fnDecrement, fnReset } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError } = useFetch( url );

    const { author, quote } = !!data && data[0];

    useEffect(() => {}, [counter]);

    useEffect(() => {}, [url]);
    


    return (
        <>
            <h1>BreakingBad Quotes</h1>

            <hr />

            {
                isLoading ?
                (
                    <LoadingQuote />
                ) :
                (
                    <Quote 
                        quote={quote} 
                        author={author}
                        counter={counter}
                        fnBack={fnDecrement}
                        fnNext={fnIncrement}
                    />
                )
            }


        </>
    )
}
