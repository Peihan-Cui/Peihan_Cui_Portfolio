import Arrow from "./Arrow.jsx";

export default function ContactBanner() {
    return (
        <section className="contact-banner">
            <div>
                <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
                <h2>Let’s make something <em>great.</em></h2>
            </div><a className="round-link" href="#contact" aria-label="Get in touch"><Arrow diagonal /></a>
        </section>
    )
}