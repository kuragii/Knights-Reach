import React from "react";
import "./Volunteer.css";
import "../App.css";
import Navbar from "./Navbar"; // or Volunteer.css if you separate it

export default function Volunteer() {
    return (
        <div className="volunteer-page">
            {/* Hero / Intro Section */}

            <Navbar />

            <section className="volunteer-hero">
                <h1>Become a Volunteer</h1>
                <p>Make an impact on campus by giving your time and energy to fellow Knights in need.</p>
            </section>

            {/* What You'll Do */}
            <section className="volunteer-what">
                <h2>What You'll Do</h2>
                <ul className="volunteer-list">
                    <li>🍎 Help sort and distribute food and supplies</li>
                    <li>📦 Assist with donation events on campus</li>
                    <li>🤝 Connect students to the resources they need</li>
                </ul>
                <p className="volunteer-note">
                    No matter your schedule, there's a place for you on our team.
                    Thank you for supporting your fellow Knights!
                </p>
            </section>

            {/* Schedule Flexibility */}
            <section className="volunteer-flexibility">
                <h2>Flexible Schedules</h2>
                <p>Whether you can volunteer once a week or once a semester, we’ll work with your schedule!</p>
            </section>

            {/* Impact Stats */}
            <section className="volunteer-impact">
                <h2>Your Impact</h2>
                <div className="impact-grid">
                    <div><strong>69,818</strong><span>Students Supported</span></div>
                    <div><strong>370</strong><span>Donations Collected</span></div>
                    <div><strong>385</strong><span>Requests Fulfilled</span></div>
                    <div><strong>50</strong><span>Campus Events</span></div>
                </div>
            </section>

            {/* CTA */}
            <section className="volunteer-cta">
                <h2>Ready to Lend a Hand?</h2>
                <p>Click below to fill out our volunteer interest form and we'll follow up with more details.</p>
                <a href="/volunteer-form" className="button yellow">Sign Up to Volunteer</a>
            </section>
        </div>
    );
}
