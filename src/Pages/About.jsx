import { portfolio } from "../data.js";
import ContactBanner from "../Components/ContactBanner.jsx";
import PageHeading from "../Components/PageHeading.jsx";
import Arrow from "../Components/Arrow.jsx";

export default function About() {
    return (
        <>
            <PageHeading
                label="THE PERSON BEHIND THE PIXELS"
                title="Hello, I’m"
                accent={`${portfolio.firstName}.`}
            >
                A developer’s brain, a designer’s eye, and a very long list of things I want to learn.
            </PageHeading>

            <section className="about-layout">
                <div className="portrait-placeholder">
                    <span className="portrait-label">
                        A LITTLE SNAPSHOT OF ME
                    </span>

                    <div className="portrait-monogram">
                        {portfolio.initials}
                        <span>✳</span>
                    </div>

                    <div className="portrait-caption">
                        <span>{portfolio.name}</span>
                        <span>{portfolio.role}</span>
                    </div>

                    <small>YOUR PHOTO COULD GO HERE</small>
                </div>

                <div className="about-copy">
                    <span className="eyebrow">
                        CURIOUS BY DEFAULT
                    </span>

                    <h2>
                        First, solve the <em>problem</em>. <br /> Then, write the <em>code</em>.
                        <br />
                    </h2>
                    {portfolio.bio.map((paragraph) => (
                        <p key={paragraph}>
                            {paragraph}
                        </p>
                    ))}

                    <div className="about-facts">
                        <div>
                            <span>BASED IN</span>
                            <strong>{portfolio.location}</strong>
                        </div>

                        <div>
                            <span>CURRENTLY</span>
                            <strong>{portfolio.availability}</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="employment">
                <h2>Current place of <em>employment.</em></h2>
                <span className='experience-tile'>
                    {portfolio.currentEmployment}
                    <a className="round-link" href="#experience" aria-label="Get in touch">
                    <Arrow diagonal />
                </a>
                </span>
            </section>

            <section className="section skills-section">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">
                            MY EVER-EVOLVING SKILLS
                        </span>

                        <h2>
                            My <em>skills.</em>
                        </h2>
                    </div>

                    <p>
                        The more the merrier
                    </p>
                </div>

                <div className="skill-grid">
                    {portfolio.skills.map((skill, index) => (
                        <div key={skill}>
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{skill}</h3>

                            <Arrow diagonal />
                        </div>
                    ))}
                </div>
            </section>

            <section className="beyond-code">
                <h2>
                    There’s more to <em>my life.</em>
                </h2>

                <div>
                    {portfolio.interests.map((interest) => (
                        <span key={interest}>
                            {interest}
                        </span>
                    ))}
                </div>
            </section>

            <ContactBanner />
        </>
    );
}