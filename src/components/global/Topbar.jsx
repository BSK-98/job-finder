import { Link, NavLink } from 'react-router-dom';

import './../../assets/styles/topbar.css';

const Topbar = () => {
    return (
        <div className="topbar">
            <h1>Accounts</h1>
            <nav>
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/services">Services</NavLink>
            </nav>
        </div>
    )
}

export default Topbar;