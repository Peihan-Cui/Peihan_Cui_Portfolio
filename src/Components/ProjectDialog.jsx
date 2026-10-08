import {useEffect, useRef} from "react";
import {ProjectArtwork} from "./ProjectArtwork.jsx";

export default function ProjectDialog({ project, onClose }) {
    const dialog = useRef(null)
    function closeDialog() {
        dialog.current.close()
        onClose()
    }
    useEffect(() => {
        const element = dialog.current
        element.showModal()
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [])
    return (
        <dialog ref={dialog} className="project-dialog" aria-label={`${project.title} project details`} onCancel={event => { event.preventDefault(); closeDialog() }} onClick={event => { if (event.target === event.currentTarget) closeDialog() }}>
            <button className="dialog-close" aria-label="Close project details" onClick={closeDialog}>×</button>
            <ProjectArtwork kind={project.artwork} />
            <div className="dialog-content">
                <span className="eyebrow">{project.category} · Concept project</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <h3>The approach</h3><p>{project.approach}</p>
                <div className="dialog-links">
                    {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live project <Arrow diagonal /></a>}
                    {project.sourceUrl && <a className="button button-outline" href={project.sourceUrl} target="_blank" rel="noreferrer">Source code <Arrow diagonal /></a>}
                </div>
                <p className="template-note">Sample case study — replace this with your own work.</p>
            </div>
        </dialog>
    )
}