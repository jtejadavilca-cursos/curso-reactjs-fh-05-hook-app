import React from 'react'

export const ShowIncrement = React.memo(( {fnIncrement} ) => {

    console.log('Dibujando...');

    return (
        <button
            className='btn btn-primary'
            onClick={() => fnIncrement(5)}
        >
            Incrementar
        </button>
    )
})
