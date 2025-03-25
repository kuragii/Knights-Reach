import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function About() {
    return (
        <div>
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

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-overlay">
                    <h1>About</h1>
                    <p>
                        <Link to="/">Home</Link> <span> &gt; </span> <span className="active">About</span>
                    </p>
                </div>
            </section>

            {/* Main Content Placeholder */}
            <section className="about-content">
                <h2>Who We Are</h2>
                <p>
                    Knights Reach is a student-powered initiative at the University of Central Florida, designed to connect students
                    with essential resources like food, clothing, and textbooks.
                </p>
                <p>
                    Through our donation and request system, we build a compassionate network of students helping students. Whether you're
                    giving or receiving, you're a vital part of a growing community that supports one another.
                </p>
            </section>
        </div>
    );
}
