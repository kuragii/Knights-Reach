import React from "react";
import { Link } from "react-router-dom";



export default function Home() {
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
                    { title: "Drinks", icon: "🍎" },
                    { title: "Personal Items", icon: "📚" },
                    { title: "Hygiene Supplies", icon: "👕" },
                ].map((item, index) => (
                    <div key={index} className="card">
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <Link to="/donate" className="button yellow">Make a donation</Link>
                    </div>
                ))}
            </section>

            {/* Help Section */}
            <section className="help-section">
                <div className="help-image">
                    <img src="/Knight_Volunteering.webp" alt="Knightro at food pantry" />
                </div>
                <div className="help-text">
                    <h2>Get help from your fellow Knights, or be the one to offer help!</h2>

                    <div className="text-block">
                        <h3>Make a donation</h3>
                        <p>
                            Please fill out the form for items you are able to donate. For every item you list to donate, another student can request to pick it up for their needs.
                            <br /><br />
                            Your generosity is the backbone of the community. Thank you!
                        </p>
                    </div>

                    <div className="text-block">
                        <h3>Request for a donation</h3>
                        <p>
                            When you are in need, ask for help! From this community, you will not have to worry if you can eat tonight, have professional attire to wear at an interview, or be able to acquire all your course material.
                        </p>
                    </div>

                    <div className="button-group">
                        <Link to="/donation-form" className="button yellow">Complete this form!</Link>
                        <Link to="/learn-more" className="button gray">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* Badge Section */}
            <section className="badge-section">
                <h2>Badges</h2>
                <p>Below are the badges you can earn:</p>

                <div className="badge-grid">
                    {[
                        {
                            caption: "Earned by donating three items.",
                            img: "/badge1.png",
                            title: "Friend",
                        },
                        {
                            caption: "Earned by donating five items.",
                            img: "/badge2.png",
                            title: "Pantry Angel",
                        },
                        {
                            caption: "Earned by donating ten items.",
                            img: "/badge3.png",
                            title: "Philanthropist",
                        },
                    ].map((badge, index) => (
                        <div className="badge-card" key={index}>
                            <p className="badge-caption">{badge.caption}</p>
                            <img src={badge.img} alt={badge.title} />
                            <p className="badge-title">{badge.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
                {[
                    { number: "69,818", label: "Students" },
                    { number: "370", label: "Donations" },
                    { number: "385", label: "Requests" },
                    { number: "50", label: "Events" },
                ].map((stat, index) => (
                    <div className="stat" key={index}>
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h4>About Knights Reach</h4>
                        <p>
                            Welcome to Knights Reach! A platform designed to connect those in need with those who want to give...
                            <br />Together, we're creating a more efficient and compassionate way to support the Knights community!
                        </p>
                        <div className="socials">
                            <a href="#"><img src="/facebook-icon.png" alt="Facebook" /></a>
                            <a href="#"><img src="/threads-icon.png" alt="Threads" /></a>
                            <a href="#"><img src="/instagram-icon.png" alt="Instagram" /></a>
                        </div>
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