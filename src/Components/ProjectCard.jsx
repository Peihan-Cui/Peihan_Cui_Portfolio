import {ProjectArtwork} from "./ProjectArtwork.jsx";
import Arrow from "./Arrow.jsx";

export default function ProjectCard({ project, onSelect, index }) {
    return (
        <button
            className="project-card"
            onClick={() => onSelect(project)}
            aria-label={`View ${project.title} project details`}
        >
            <div className="project-image">
                <ProjectArtwork kind={project.artwork} />

                <span className="project-open">
                    <Arrow diagonal />
                </span>
            </div>

            <div className="project-meta">
                <span>{project.category}</span>
                <span>0{index + 1}</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.summary}</p>

            <div className="tags">
                {project.tags.map((tag) => (
                    <span key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </button>
    );
}