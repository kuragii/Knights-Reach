import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Volunteer() {
    return (
        <div className="volunteer-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="logo">
                    <img src="/Logo_1.png" alt="Knights Reach Logo" />
                </div>

                <div className="nav-links">
                    <Link to="/volunteer">Volunteer</Link>
                    <Link to="/donate">Donate</Link>
                    <Link to="/request">Request</Link>
                </div>
            </nav>

            {/* Hero */}
            <header className="hero">
                <h1>Become a Volunteer</h1>
                <p>
                    Join Knights Reach in making a difference! As a volunteer, you'll help distribute items,
                    organize drives, and support fellow students in need.
                </p>
                <div>
                    <Link to="/register" className="button yellow">
                        Sign Up to Volunteer
                    </Link>
                </div>
            </header>

            {/* Volunteer Info Section */}
            <section className="volunteer-info">
                <h2>What You'll Do</h2>
                <ul>
                    <li>🍎 Help sort and distribute food and supplies</li>
                    <li>📦 Assist with donation events on campus</li>
                    <li>🤝 Connect students to the resources they need</li>
                </ul>

                <p className="volunteer-cta-text">
                    No matter your schedule, there's a place for you on our team. Thank you for supporting
                    your fellow Knights!
                </p>
            </section>

            {/* Banner */}
            <div className="contact-banner">
                <h2>Ready to Lend a Hand?</h2>
            </div>
        </div>
    );
}
