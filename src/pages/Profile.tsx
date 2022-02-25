import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper'

export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('user');

            setFirstName(data.firstName)
            setLastName(data.lastName)
            setEmail(data.email)

        })();
    }, [])

    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.put('users/info', {
            firstName,
            lastName,
            email
        })
    }
    const passwordSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.put('users/password', {
            password,
            password_confirm
        })
    }
    return (
        <Wrapper>
            <h3 className="mt-3">Account Information</h3>
            <form onSubmit={infoSubmit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control"
                        defaultValue={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control"
                        defaultValue={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control"
                        defaultValue={email}
                        onChange={e => setFirstName(e.target.value)} />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>

            <h3 className="mt-3">Change Password</h3>
            <form onSubmit={passwordSubmit}>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control"
                        onChange={e => setPasswordConfirm(e.target.value)} />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}
