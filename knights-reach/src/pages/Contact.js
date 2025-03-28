import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const faqs = [
    { question: "How to be a volunteer?", answer: "You can apply via our form on the Volunteer page. We’ll guide you through the steps!" },
    { question: "Spread awareness about volunteering", answer: "Follow us on social media and share our posts to reach more people!" },
    { question: "What should you know before applying", answer: "Make sure to read our guidelines. We look for committed and kind volunteers." },
    { question: "How you could become an external partner", answer: "Fill out the Partner Inquiry form and we’ll reach out with details." },
    { question: "Information about the application process", answer: "It includes a short form, interview, and orientation session." },
    { question: "Accepted donation items", answer: "We accept clothes, canned food, books, hygiene products, and more!" }
];

export default function Contact() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
            <header className="hero_contact">
                <h1>Contact Us</h1>
                <p>
                    <Link to="/">Home</Link> <span> &gt; </span> <span className="active">Contact</span>
                </p>
                <div>
                    <Link to="/donation-form" className="button yellow">
                        Fill out the donation form
                    </Link>
                    <Link to="/volunteers" className="button gray">
                        Volunteers
                    </Link>
                </div>
            </header>

            {/* Contact Content */}
            <div className="contact-page">
                {/* Top Banner */}
                <div className="contact-banner">
                    <h2>Let’s Connect!</h2>
                </div>

                <p className="contact-heading">
                    We are located at the University of Central Florida in Orlando,
                    Florida.
                </p>

                <div className="contact-info-grid">
                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <h3>Physical Address</h3>
                        <p>
                            4000 Central Florida Blvd
                            <br />
                            Orlando, FL 32816
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">⏰</div>
                        <h3>Hours</h3>
                        <p>
                            Monday to Friday: 7am – 7pm
                            <br />
                            Weekend: 10am – 5pm
                        </p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <h3>Phone Numbers</h3>
                        <p>(407) 823-2000</p>
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="contact-banner">
                    <h2>Send us your Feedback</h2>
                </div>
                <div className="contact-form">
                    <form>
                        <label htmlFor="name">Full Name *</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email Address *</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="subject">Subject *</label>
                        <input type="text" id="subject" name="subject" required />

                        <label htmlFor="message">Message *</label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit" className="button yellow">Send Message</button>
                    </form>
                </div>

                <section className="volunteer-cta">
                    <p className="cta-subtitle">Become a volunteer</p>
                    <h2 className="cta-title">
                        Join us for a better life<br />
                        and beautiful future
                    </h2>
                    <Link to="/volunteer" className="button yellow">
                        Apply Now
                    </Link>
                </section>

                {/* FAQ Section */}
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="faq-card"
                                onClick={() => toggle(index)}
                            >
                                <div className="faq-question">{faq.question}</div>
                                {openIndex === index && (
                                    <div className="faq-answer">{faq.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="volunteer-banner">
                    <div className="volunteer-overlay">
                        <div className="volunteer-content">
                            <p className="volunteer-subtitle">Become a volunteer</p>
                            <h1 className="volunteer-heading">Join us to make a difference</h1>
                            <Link to="/volunteer" className="volunteer-btn">Apply Now</Link>
                        </div>
                    </div>
                </div>



            </div>
            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4>About Knights Reach</h4>
                        <p>
                            Welcome to Knights Reach! A platform designed to connect those in need with those who want to give...
                            <br />Together, we're creating a more efficient and compassionate way to support the Knights community!
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Important Links</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>


                    <div className="footer-useful">
                        <h4>Useful Links</h4>
                        <a href="http://map.ucf.edu/?show=">UCF Map</a>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <p>📍 4133 Pyxis Ln, Orlando, FL 32816</p>
                        <p>📞 <a href="tel:4078233663">(407) 823-3663</a></p>
                        <p>✉️ <a href="mailto:khkpantry@ucf.edu">khkpantry@ucf.edu</a></p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © 2025 – WordPress Theme by Creative Themes</p>
                </div>
            </footer>
        </div>
    );
}
