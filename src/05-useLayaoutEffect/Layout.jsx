import { useEffect } from 'react'
import {
    useCounter,
    useFetch
} from '../hooks/';
import { LoadingQuote, Quote } from '../03-examples/';

export const Layout = () => {

    const { counter, fnIncrement, fnDecrement, fnReset } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError } = useFetch( url );

    console.log({ data, isLoading, hasError });

    const { author, quote } = !!data && data[0];

    useEffect(() => {
      console.log('counter...');
    }, [counter]);

    useEffect(() => {
        console.log('url...');
      }, [url]);
    


    return (
        <>
            <h1>BreakingBad Quotes - Layout</h1>

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
