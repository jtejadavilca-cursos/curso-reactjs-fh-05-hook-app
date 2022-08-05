import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const {user, setUser} = useContext( UserContext );

    const userLoged = {
        id: 123,
        name: 'Jose',
        email: 'jose@gmail.com'
    }

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre aria-label='pre'>
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>

            {!!user || (<button  className='btn btn-primary' onClick={() => setUser(userLoged)}>Establecer user</button>)}
        </>
      )
    }
    