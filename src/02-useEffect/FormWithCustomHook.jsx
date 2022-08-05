import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: 'strider',
        email: 'strider@gmail.com',
        password: ''
    });

    const { username, email, password } = formState;


    useEffect( () => {
        // console.log('useEffect...');
    }, []);

    useEffect( () => {
        // console.log('formState...');
    }, [formState]);


    useEffect( () => {
        // console.log('username changed...');
    }, [username]);


    useEffect( () => {
        // console.log('email changed...');
    }, [email]);


    return (
        <>
            <h1>Formulario With Custom Hook</h1>

            <hr />

            <input 
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input 
                type='email'
                className='form-control mt-2'
                placeholder='usuario@email.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input 
                type='password'
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            {
                (username == 'strider2') && <Message />
            }

            <button onClick={onResetForm} className='btn btn-primary mt-3'>Reset</button>
        </>
    )
}
