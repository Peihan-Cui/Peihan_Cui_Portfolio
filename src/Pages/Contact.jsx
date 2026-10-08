import { useState } from "react";
import { portfolio } from "../data.js";
import PageHeading from "../Components/PageHeading.jsx";
import Arrow from "../Components/Arrow.jsx";

export default function Contact() {
    const [draftOpened, setDraftOpened] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const subject = encodeURIComponent(data.get("subject"));

        const body = encodeURIComponent(
            `Hi ${portfolio.firstName},\n\n${data.get("message")}\n\nFrom: ${data.get("name")}\nReply to: ${data.get("email")}`
        );

        window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;

        setDraftOpened(true);
    }

    return (
        <>
            <PageHeading
                label="GOOD THINGS START WITH A HELLO"
                title="Let’s start a"
                accent="conversation."
            >
                Have a project in mind, an opportunity to share, or just want to say hi?
                I’d love to hear from you.
            </PageHeading>

            <section className="contact-layout">
                <div className="contact-info">
                    <div className="availability">
                        <span />
                        {portfolio.availability}
                    </div>

                    <h2>
                        My inbox is
                        <br />
                        <em>always open.</em>
                    </h2>

                    <p>
                        The best ideas often start with a simple conversation.
                        Tell me what you’re thinking.
                    </p>

                    <a
                        className="email-link"
                        href={`mailto:${portfolio.email}`}
                    >
                        {portfolio.email}
                        <Arrow diagonal />
                    </a>

                    <div className="social-links">
                        {portfolio.socials.map((social) => (
                            <a
                                href={social.url}
                                key={social.name}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {social.name}
                                <Arrow diagonal />
                            </a>
                        ))}
                    </div>

                    <div className="contact-note">
                        <span aria-hidden="true">✳</span>

                        <p>
                            No big pitch needed.
                            <br />
                            A simple hello is a great start.
                        </p>
                    </div>
                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    onChange={() => setDraftOpened(false)}
                >
                    <div className="form-row">
                        <label>
                            Your name

                            <input
                                name="name"
                                autoComplete="name"
                                placeholder="Alex Smith"
                                required
                                maxLength={100}
                            />
                        </label>

                        <label>
                            Email address

                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="alex@example.com"
                                required
                                maxLength={254}
                            />
                        </label>
                    </div>

                    <label>
                        What’s on your mind?

                        <select
                            name="subject"
                            defaultValue="Let’s work together"
                        >
                            <option>Let’s work together</option>
                            <option>A job opportunity</option>
                            <option>Just saying hello</option>
                            <option>Something else</option>
                        </select>
                    </label>

                    <label>
                        Your message

                        <textarea
                            name="message"
                            rows={5}
                            placeholder="A little about your idea, project, or question…"
                            required
                            maxLength={4000}
                        />
                    </label>

                    <button
                        className="button button-primary"
                        type="submit"
                    >
                        Create email draft
                        <Arrow diagonal />
                    </button>

                    <p className="form-note">
                        Opens your email app with your message filled in.
                        Nothing is sent or stored by this website.
                    </p>

                    {draftOpened && (
                        <p
                            className="form-status"
                            role="status"
                        >
                            Your email app was requested. Review and send the
                            draft there, or email {portfolio.email} directly if
                            it didn’t open.
                        </p>
                    )}
                </form>
            </section>
        </>
    );
}