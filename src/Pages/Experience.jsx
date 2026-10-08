import { experience, portfolio } from "../data.js";
import ContactBanner from "../Components/ContactBanner.jsx";
import PageHeading from "../Components/PageHeading.jsx";
import Arrow from "../Components/Arrow.jsx";

export default function Experience() {
    return (
        <>
            <PageHeading
                label="LEARNING. BUILDING. GROWING."
                title="The journey"
                accent="so far."
            >
                Every role, project, and new challenge adds another layer to how
                I think and what I create.
            </PageHeading>

            <section className="experience-layout">
                <div className="section-aside">
                    <span className="eyebrow">
                        01 / EXPERIENCE
                    </span>

                    <h2>
                        Where I’ve
                        <br />
                        <em>made an impact.</em>
                    </h2>

                    <p>
                        Replace these entries with your roles, internships,
                        freelance work, or volunteering.
                    </p>
                </div>

                <div className="timeline">
                    {experience.map((item) => (
                        <article
                            className="timeline-item"
                            key={item.role}
                        >
                            <div className="timeline-date">
                                {item.dates}
                                <span>{item.type}</span>
                            </div>

                            <h3>{item.role}</h3>

                            <div className="company">
                                {item.company}
                                <Arrow diagonal />
                            </div>

                            <p>{item.description}</p>

                            <div className="tags">
                                {item.skills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="experience-layout education">
                <div className="section-aside">
                    <span className="eyebrow">
                        02 / EDUCATION
                    </span>

                    <h2>
                        A foundation
                        <br />
                        <em>for what’s next.</em>
                    </h2>
                </div>

                <article className="education-card">
                    <span className="eyebrow">
                        {portfolio.education.dates}
                    </span>

                    <h3>{portfolio.education.degree}</h3>

                    <p>{portfolio.education.school}</p>

                    <p>{portfolio.education.description}</p>
                </article>
            </section>

            <ContactBanner />
        </>
    );
}