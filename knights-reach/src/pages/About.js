import React from "react";
import "./About.css";
import Navbar from "./Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-page">

                <section className="about-hero">
                    <div className="about-overlay">
                        <h1>Who We Are</h1>
                        <p>
                            Knights Reach is a student-powered initiative at the University of Central Florida,
                            designed to connect students with essential resources like food, clothing, and textbooks.
                        </p>
                        <p>
                            Through our donation and request system, we build a compassionate network of students
                            helping students. Whether you're giving or receiving, you're a vital part of a growing
                            community that supports one another.
                        </p>
                    </div>
                </section>

                <div className="about-box">
                    <section className="about-content">
                        <h2>Our Mission</h2>
                        <p>
                            To create a culture of care and generosity by empowering students to help one another
                            through resource sharing and community-building.
                        </p>
                    </section>
                </div>

                <div className="about-box">
                    <section className="about-content">
                        <h2>How It Works</h2>
                        <ul className="about-list">
                            <li><span className="emoji">🎁</span> Donate food, clothing, or school supplies anonymously or publicly.</li>
                            <li><span className="emoji">📬</span> Post a request for specific items and get notified when someone donates.</li>
                            <li><span className="emoji">🤝</span> Coordinate safe, respectful drop-offs or pickups with ease.</li>
                        </ul>
                    </section>
                </div>

                <div className="about-box">
                    <section className="about-content">
                        <h2>Want to Get Involved?</h2>
                        <p>
                            Whether you’d like to volunteer, donate items, or just spread the word, Knights Reach
                            needs students like you to grow stronger.
                        </p>
                        <a className="button yellow cta-button" href="/volunteer">Join the Movement</a>
                    </section>
                </div>

                <footer className="about-footer">
                    <p>&copy; {new Date().getFullYear()} Knights Reach — Built with 💛 at UCF</p>
                </footer>

            </div>
        </>
    );
}
