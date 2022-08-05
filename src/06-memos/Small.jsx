import { memo } from 'react';


export const Small = memo(({value}) => {

    console.log('Se dibuja el componente Small');

    return (
        <small>{value}</small>
    )
})
