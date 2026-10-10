export default function Arrow({ diagonal = false }) {
    return (
        <svg
            className="arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            {diagonal ? (
                <>
                    <path d="M5 19L19 5" />
                    <path d="M9 5H19V15" />
                </>
            ) : (
                <path d="M5 12H19M13 6L19 12L13 18" />
            )}
        </svg>
    );
}