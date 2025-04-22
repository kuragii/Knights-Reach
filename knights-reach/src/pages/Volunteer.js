import React from "react";
import "./Volunteer.css";
import "../App.css";
import Navbar from "./Navbar"; // or Volunteer.css if you separate it

const Calendar = ({ onDateClick }) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const days = Array.from({ length: firstDay }, () => null).concat(
        Array.from({ length: lastDate }, (_, i) => i + 1)
    );

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>‹</button>
                <h3>{currentDate.toLocaleString('default', { month: 'long' })} {year}</h3>
                <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>›</button>
            </div>
            <div className="weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="dates">
                {days.map((d, i) => (
                    <div
                        key={i}
                        className={`date ${d ? 'active' : 'empty'}`}
                        onClick={() => d && onDateClick?.(new Date(year, month, d))}
                    >
                        {d || ''}
                    </div>
                ))}
            </div>
        </div>
    );
};


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

            {/* Calendar Section */}
<section className="volunteer-calendar">
    <h2 style={{ textAlign: 'center' }}>Pick a Date to Help</h2>
    <Calendar onDateClick={(date) => alert(`You picked: ${date.toDateString()}`)} />
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
                <p>Click below to let us know you're interested, and we'll be in touch soon!</p>
                <button
                    className="button yellow"
                    onClick={() => alert("We're so excited you're ready to get involved in making your Knight community better! As soon as we're accepting volunteers, we'll make an announcement.")}
                >
                    Sign Up to Volunteer
                </button>
            </section>

        </div>
    );
}
