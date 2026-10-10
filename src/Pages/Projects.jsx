import { useState } from "react";
import { projects } from "../data.js";
import ContactBanner from "../Components/ContactBanner.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import PageHeading from "../Components/PageHeading.jsx";

export default function Projects({ onSelect }) {
    const [filter, setFilter] = useState("All");

    const filters = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ];

    const filtered = projects.filter(
        (project) =>
            filter === "All" || project.category === filter
    );

    return (
        <>
            <PageHeading
                label="IDEAS, BROUGHT TO LIFE"
                title="A collection of"
                accent="possibilities."
            >
                A few explorations in design and development. Each one starts
                with a question and ends with something you can use.
            </PageHeading>
            <div
                className="filter-bar"
                aria-label="Filter projects"
            >
                {filters.map((item) => (
                    <button
                        key={item}
                        className={
                            filter === item
                                ? "filter active"
                                : "filter"
                        }
                        aria-pressed={filter === item}
                        onClick={() => setFilter(item)}
                    >
                        {item}

                        {item === "All" && (
                            <span>
                                {projects.length
                                    .toString()
                                    .padStart(2, "0")}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            <div className="project-grid projects-page">
                {filtered.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={projects.indexOf(project)}
                        onSelect={onSelect}
                    />
                ))}
            </div>

            <div className="project-card coming-soon-card">
                <div className="coming-soon-content">
                    <h3>More coming soon...</h3>
                    <p>I'm always working on something new.</p>
                </div>
            </div>

            <ContactBanner />
        </>
    );
}