import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

  const {user, setUser} = useContext( UserContext );

  return (
      <>
          <h1>HomePage</h1>
          <hr />

          <pre aria-label='pre'>
              {
                  JSON.stringify(user, null, 3)
              }
          </pre>


        {!user || (<button  className='btn btn-danger' onClick={() => setUser(undefined)}>Remove user</button>)}
      </>
    )
}
    
