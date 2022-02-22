import axios from "axios";
import { useEffect, useState } from "react";

const Nav = () => {

    const [user, setUser] = useState({
        firstName: '',
    });


    useEffect(() => {
        (async () => {
            const { data } = await axios.get('http://localhost:8000/api/user', { withCredentials: true });

            setUser(data);
        })();
    }, []);

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="{#}">Company name</a>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link text-white text-decoration-none" href="{#}">{user.firstName}</a>
                    <a className="nav-link" href="{#}">Sign out</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;