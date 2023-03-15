import { NavLink } from 'react-router-dom';

import './../../assets/styles/topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <h1>Jobs</h1>
            <nav>
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/services">Jobs</NavLink>
                <NavLink activeClassName="active" to="/login">Login</NavLink>
            </nav>
        </div>
    )
}

export default Topbar;