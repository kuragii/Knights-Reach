import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">KNIGHTS REACH</div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/volunteer">Volunteer</Link>
                    <Link to="/donate">Donate</Link>
                    <Link to="/request">Request</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <h1>Knights Reach</h1>
                <p>This website is to help students at the University of Central Florida connect and donate items with each other.</p>
                <div>
                    <Link to="/donation-form" className="button yellow">Fill out the donation form</Link>
                    <Link to="/volunteers" className="button gray">Volunteers</Link>
                </div>
            </header>

            {/* Donation Categories */}
            <section className="donation-section">
                {[
                    { title: "Food", icon: "🍎" },
                    { title: "Textbooks", icon: "📚" },
                    { title: "Clothing", icon: "👕" },
                ].map((item, index) => (
                    <div key={index} className="card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <Link to="/donate" className="button yellow">Make a donation</Link>
                    </div>
                ))}
            </section>
        </div>
    );
}