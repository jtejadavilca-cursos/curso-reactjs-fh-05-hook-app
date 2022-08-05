import { useRef, useLayoutEffect, useState } from "react"

export const Quote = ( { quote, author, counter, fnBack, fnNext } ) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    setBoxSize({width, height});
  }, [quote])

  return (
    <>
        <blockquote
          className='blockquote text-end'
          style={{display: 'flex'}}
        >
            <p ref={pRef} className="mb-4">
                {quote}
            </p>

            <footer className='blockquote-footer'>
                {author}
            </footer>
        </blockquote>

        { counter > 1 && (<button className='btn btn-primary' onClick={fnBack}>Atrás</button>) }
        <button className='btn btn-primary' onClick={fnNext}>Siguiente</button>

        <hr />
        <code>
          {JSON.stringify(boxSize)}
        </code>
    </>
  )
}
