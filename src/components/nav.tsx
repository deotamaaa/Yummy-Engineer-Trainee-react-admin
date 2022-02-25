import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { User } from "../models/user";


const Nav = (props: { user: User }) => {

    const logout = async () => {
        await axios.post('logout', {});
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="{#}">Nice Company LOL</a>
            <ul className="navbar-nav px-3">
                <Link to="/profile" className="nav-link text-white text-decoration-none" >{props.user.name}</Link>
                <Link to="/login" className="nav-link" onClick={logout}>Sign out</Link>
            </ul>
        </nav>
    )
}
const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Nav);