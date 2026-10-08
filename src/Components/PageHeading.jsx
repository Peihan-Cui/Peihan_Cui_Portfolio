export default function PageHeading({ label, title, accent, children }) {
    return (
        <div className="page-heading">
            <span className="eyebrow">{label}</span>
            <h1>{title} <em>{accent}</em></h1><p>{children}</p>
        </div>
    )
}