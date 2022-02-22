import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'
import { Redirect } from 'react-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('http://localhost:8000/api/login', {
            email,
            password,
        }, { withCredentials: true });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/'} />
    }
    return (

        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>

            <input type="email" className="form-control" placeholder="Email address" required
                onChange={e => setEmail(e.target.value)} />


            <input type="password" className="form-control" placeholder="Password" required
                onChange={e => setPassword(e.target.value)}
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
    )
}
