import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // import your styles

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                navigate("/profile");
            } else {
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("Something went wrong.");
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <p>Don't have an account? <a href="/register">Register</a></p>


                {error && <p className="error">{error}</p>}

                <button type="submit" className="button yellow">Login</button>
            </form>
        </div>
    );
}
