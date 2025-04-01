import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
import "../App.css";

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate();


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


                </div>
        </nav>
    );
}
