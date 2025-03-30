import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        fetch("http://localhost:3001/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(async (res) => {
                if (!res.ok) {
                    throw new Error("Unauthorized");
                }
                const data = await res.json();
                setUser(data);
            })
            .catch(() => {
                setError("Session expired or invalid. Please log in again.");
                localStorage.removeItem("token");
                navigate("/login");
            });
    }, [navigate]);

    if (!user) return <p>Loading profile...</p>;

    return (
        <div className="profile-page">
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
        </div>
    );
}
