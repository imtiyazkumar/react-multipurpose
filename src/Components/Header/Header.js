import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <h1>My App</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="login">Login</Link>
            </nav>
        </div>
    )
}

export default Header