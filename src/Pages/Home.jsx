import { portfolio, projects } from "../data.js";
import ContactBanner from "../Components/ContactBanner.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import Arrow from "../Components/Arrow.jsx";

export default function Home({ onSelect }) {
    return (
        <>
            <section className="hero">
                <div className="hero-copy">
                    <div className="availability">
                        <span />
                        {portfolio.availability}
                    </div>

                    <h1>
                        Thoughtful code.
                        <br />
                        Meaningful
                        <br />
                        <em>experiences.</em>
                        <span className="hero-period">✳</span>
                    </h1>

                    <p>
                        I’m {portfolio.name}, a{" "}
                        {portfolio.role.toLowerCase()} who brings ideas to life
                        through clean code and considered design.
                    </p>

                    <div className="hero-actions">
                        <a
                            className="button button-primary"
                            href="#projects"
                        >
                            Explore my work
                            <Arrow diagonal />
                        </a>

                        <a
                            className="text-link"
                            href="#about"
                        >
                            A little about me
                            <Arrow />
                        </a>
                    </div>
                </div>

                <div
                    className="hero-art"
                    aria-hidden="true"
                >
                    <div className="art-grid" />

                    <span className="art-coordinate">
                        CREATIVITY × TECHNOLOGY
                    </span>

                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <div className="orbit orbit-three" />

                    <div className="orbit-core">
                        p
                        <span>c</span>
                        <small>DESIGN. BUILD. REPEAT.</small>
                    </div>

                    <div className="floating-label label-code">
                        &lt;craft /&gt;
                    </div>

                    <div className="floating-label label-design">
                        ✳ made with intention
                    </div>

                    <div className="art-footer">
                        <span>ALWAYS CURIOUS.</span>
                        <span>001 — ∞</span>
                    </div>
                </div>
            </section>

            <div className="intro-strip">
                <span>DESIGN MINDED. DETAIL DRIVEN.</span>

                <div>
                    {portfolio.skills.slice(0, 4).map((skill) => (
                        <span key={skill}>
                            {skill}
                            <i>✳</i>
                        </span>
                    ))}
                </div>
            </div>

            <section className="section selected-work">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">
                            A FEW THINGS I’VE BUILT
                        </span>

                        <h2>
                            Selected <em>work.</em>
                        </h2>
                    </div>

                    <a
                        className="text-link"
                        href="#projects"
                    >
                        All projects
                        <Arrow diagonal />
                    </a>
                </div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onSelect={onSelect}
                        />
                    ))}
                </div>
            </section>

            <section className="home-about">
                <span className="eyebrow">
                    MORE THAN JUST CODE
                </span>

                <h2>
                    Curiosity is my compass.
                    <br />
                    <em>Making things is my thing.</em>
                </h2>

                <p>{portfolio.shortBio}</p>

                <a
                    className="text-link"
                    href="#about"
                >
                    Meet the person behind the pixels
                    <Arrow diagonal />
                </a>

                <span
                    className="about-asterisk"
                    aria-hidden="true"
                >
                    ✳
                </span>
            </section>

            <ContactBanner />
        </>
    );
}