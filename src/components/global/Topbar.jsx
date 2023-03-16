import { NavLink } from 'react-router-dom';

import './../../assets/styles/topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <h1>Jobs</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Jobs</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </div>
    )
}

export default Topbar;