import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = () => {

    const [user, setUser] = useState(new User());


    useEffect(() => {
        (async () => {
            const { data } = await axios.get('user');

            setUser(new User(
                data.id,
                data.firstName,
                data.lastName,
                data.email,
                data.role,
            ));
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {});
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="{#}">Company name</a>
            <ul className="navbar-nav px-3">
                <Link to="/profile" className="nav-link text-white text-decoration-none" >{user.name}</Link>
                <Link to="/login" className="nav-link" onClick={logout}>Sign out</Link>
            </ul>
        </nav>
    )
}

export default Nav;