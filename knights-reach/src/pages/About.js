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

<>
                <div class="iframe-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.911643195512!2d-81.20263482450022!3d28.602427375681245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7685d6a0a495f%3A0x5fd59b92b3c79bab!2sUniversity%20of%20Central%20Florida!5e0!3m2!1sen!2sus!4v1743370793180!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div></>


                <footer className="about-footer">
                    <p>&copy; {new Date().getFullYear()} Knights Reach — Built with 💛 at UCF</p>
                </footer>

            </div>
        </>
    );
}
