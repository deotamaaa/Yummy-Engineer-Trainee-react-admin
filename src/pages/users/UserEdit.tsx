import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import Wrapper from '../../components/Wrapper'
import { Role } from '../../models/role';

export default function UserEdit(props: any) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role_id, setRoleId] = useState('');
    const [roles, setRoles] = useState([]);
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        (async () => {
            const response = await axios.get('roles');
            setRoles(response.data);



            const { data } = await axios.get(`users/${props.match.params.id}`);

            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmail(data.email);
            setRoleId(data.role_id);
        })()
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`users/${props.match.params.id}`, {
            firstName,
            lastName,
            email,
            role_id,
        })

        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/users" />
    }
    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mt-3 mb-3">
                    <label>First Name</label>
                    <input className="form-control"
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control"
                        defaultValue={lastName}
                        onChange={
                            (e) => setLastName(e.target.value)
                        } />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)
                        } />
                </div>
                <div className="mb-3">
                    <label>Role</label>
                    <select className="form-control"
                        value={role_id}
                        onChange={(e) => setRoleId(e.target.value)
                        } >
                        {roles.map((r: Role) => {
                            return (
                                <option
                                    key={r.id}
                                    value={r.id}>
                                    {r.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}
