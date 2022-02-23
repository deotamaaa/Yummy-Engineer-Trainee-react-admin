import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    const [user, setUser] = useState({
        firstName: '',
    });


    useEffect(() => {
        (async () => {
            const { data } = await axios.get('user');

            setUser(data);
        })();
    }, []);

    const logout = async () => {
        await axios.post('logout', {});
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="{#}">Company name</a>
            <ul className="navbar-nav px-3">
                <Link to="/profile" className="nav-link text-white text-decoration-none" >{user.firstName}</Link>
                <Link to="/login" className="nav-link" onClick={logout}>Sign out</Link>
            </ul>
        </nav>
    )
}

export default Nav;