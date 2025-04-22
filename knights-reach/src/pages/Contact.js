import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Thank you for your feedback.");
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <header className="hero_contact">
                <h1>Contact Us</h1>
                <p>
                    <Link to="/" className={"yellow-link"}>Home</Link> <span> &gt; </span> <span className="active">Contact</span>
                </p>
                <div>
                    <Link to="/donate" className="button yellow">Fill out the donation form</Link>
                    <Link to="/volunteer" className="button gray">Volunteers</Link>
                </div>
            </header>

            {/* Contact Content */}
            <div className="contact-page">
                <div className="contact-banner">
                    <h2>Let’s Connect!</h2>
                </div>

                <p className="contact-heading">
                    We are located at the University of Central Florida in Orlando, Florida.
                </p>

                <div className="contact-info-grid">
                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <h3>Physical Address</h3>
                        <p>4000 Central Florida Blvd<br />Orlando, FL 32816</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">⏰</div>
                        <h3>Hours</h3>
                        <p>Monday to Friday: 7am – 7pm<br />Weekend: 10am – 5pm</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <h3>Phone Numbers</h3>
                        <p>(407) 823-2000</p>
                    </div>
                </div>

                {/* Form Section - Updated */}
                <div className="contact-banner">
                    <h2>Send us your Feedback</h2>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="subject">Subject *</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <label htmlFor="message">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit" className="button yellow">Send Message</button>
                    </form>
                </div>

                {/* Rest of the page remains unchanged */}
                <section className="volunteer-cta">
                    <p className="cta-subtitle">Become a volunteer</p>
                    <h2 className="cta-title">Join us for a better life<br />and beautiful future</h2>
                    <Link to="/volunteer" className="button yellow">Apply Now</Link>
                </section>

                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-card" onClick={() => toggle(index)}>
                                <div className="faq-question">{faq.question}</div>
                                {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
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

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4>About Knights Reach</h4>
                        <p>Welcome to Knights Reach! A platform designed to connect those in need with those who want to give...<br />Together, we're creating a more efficient and compassionate way to support the Knights community!</p>
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
                    <p>© 2025 Knights Reach — Built with 💛 at UCF</p>
                </div>
            </footer>
        </div>
    );
}
