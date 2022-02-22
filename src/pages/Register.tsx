import React, { Component, SyntheticEvent } from 'react'
import '../login.css'
export default class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        })
    }
    render() {
        return (
            <form className="form-signin" onSubmit={this.submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                <input className="form-control" placeholder="First Name" required
                    onChange={e => this.first_name = e.target.value} />
                <input className="form-control" placeholder="Last Name" required
                    onChange={e => this.last_name = e.target.value} />

                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e => this.email = e.target.value} />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => this.password = e.target.value} />
                <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e => this.password_confirm = e.target.value} />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        );
    }
}
