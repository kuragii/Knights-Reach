import React, { useState } from "react";
import "./RequestForum.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function RequestForum() {
    const [requests, setRequests] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, title, description } = form;
        if (name && email && title && description) {
            setRequests([{ ...form, id: Date.now() }, ...requests]);
            setForm({ name: "", email: "", title: "", description: "", category: "" });
        }
    };

    return (
        <>
            <Navbar />

            <div className="forum-container">
                <h1>Requests</h1>

                {/* New Post Form */}
                <form className="forum-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
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
                    <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    >
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
                                <div className="forum-meta">
                                    <strong>Requested by:</strong> {req.name} ({req.email})
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
