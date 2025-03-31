import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import "../App.css";

export default function Navbar({ user, setUser }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="logo">
                <img src="/Logo_1.png" alt="Knights Reach Logo" className="logo-img" />
            </div>

            <div className="nav-links">
                <Link to="/volunteer">Volunteer</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/request">Request</Link>

                <div className="user-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
                    <div className="user-icon">
                        {user?.name?.charAt(0).toUpperCase() || "👤"}
                    </div>


                    {showDropdown && (
                        <div className="dropdown-menu">
                            {user ? (
                                <>
                                    <Link to="/profile">Profile</Link>
                                    <button onClick={handleSignOut}>Sign Out</button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">Sign In</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
