import React, { useState } from "react";
import "./DonationForum.css";
import { Link } from "react-router-dom";

export default function DonationForum() {
    const [requests, setRequests] = useState([]);
    const [form, setForm] = useState({ title: "", description: "", category: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.title && form.description) {
            setRequests([{ ...form, id: Date.now() }, ...requests]);
            setForm({ title: "", description: "", category: "" });
        }
    };

    return (
        <>
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

            <div className="forum-container">
                <h1>Donation Requests</h1>

                {/* New Post Form */}
                <form className="forum-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title (e.g., Need winter clothes for kids)"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Describe your request..."
                        rows="4"
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                    <select name="category" value={form.category} onChange={handleChange}>
                        <option value="">Select a category</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Hygiene">Hygiene</option>
                        <option value="School Supplies">School Supplies</option>
                        <option value="Other">Other</option>
                    </select>
                    <button type="submit">Post Request</button>
                </form>

                {/* Posted Requests */}
                <div className="forum-posts">
                    {requests.length === 0 ? (
                        <p>No requests yet. Be the first to post!</p>
                    ) : (
                        requests.map((req) => (
                            <div className="forum-post" key={req.id}>
                                <h3>{req.title}</h3>
                                {req.category && <span className="forum-tag">{req.category}</span>}
                                <p>{req.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
