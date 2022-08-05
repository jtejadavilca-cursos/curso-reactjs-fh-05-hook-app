import { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        const onMouseMove = ( {x, y} ) => {
            const coords = { x, y };
            console.log('coords', coords);
        };

      window.addEventListener( 'mousemove', onMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        console.log('Message UNmounted');
      }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
