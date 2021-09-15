import React from 'react'
import { Link } from 'react-router-dom';
function Header() {

    return (
        <div className="header">
            <div className="left-header">
                <p>Shopping.com</p>
            </div>
            <div className="right-header">
                 <div>
                    <Link to="/home/">Home</Link>
                </div>
                <div className="active">
                    <Link to="/login/">Login</Link>
                </div>
                <div>
                    <Link to="/users/">Users</Link>
                </div>
                <div>
                    <Link to="/productopt/">Products</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
