import { useEffect, useRef, useState } from 'react'
import { portfolio, projects, experience } from './data'
import './App.css'

const pages = ['Home', 'Projects', 'Experience', 'About', 'Contact']
const currentYear = new Date().getFullYear()
const getPage = () => window.location.hash.slice(1).toLowerCase() || 'home'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectArtwork({ kind }) {
  return (
    <div className={`project-art ${kind}`} aria-hidden="true">
      {kind === 'dashboard' ? (
        <div className="mock-dashboard">
          <div className="mock-sidebar"><b>o.</b><i /><i /><i /><i /></div>
          <div className="mock-dashboard-body">
            <div className="mock-topline">Overview <span>↗</span></div>
            <div className="mock-stats"><div><small>Total balance</small><strong>$24,680<span>.00</span></strong></div><div className="mock-trend">+12.8% ↗</div></div>
            <div className="mock-chart">{[26, 42, 34, 58, 48, 76, 62, 90, 78, 100, 88, 118].map((height, i) => <i key={i} style={{ height }} />)}</div>
            <div className="mock-bottom"><span>Activity</span><span>● ● ●</span></div>
          </div>
        </div>
      ) : kind === 'botanical' ? (
        <div className="mock-botanical">
          <div className="botanical-header">FORM & FIELD <span>Shop&nbsp; About&nbsp; ↗</span></div>
          <div className="botanical-copy">A little nature.<br /><em>A lot of good.</em></div>
          <div className="plant"><div className="leaf leaf-one" /><div className="leaf leaf-two" /><div className="leaf leaf-three" /><div className="stem" /><div className="pot" /></div>
          <span className="botanical-button">Find your green ↗</span>
        </div>
      ) : (
        <div className="mock-atlas">
          <div className="atlas-top">ATLAS<span>EXPLORE THE EVERYDAY</span></div>
          <div className="atlas-sun" /><div className="atlas-mountain mountain-back" /><div className="atlas-mountain mountain-front" />
          <div className="atlas-copy">Take the<br /><em>scenic route.</em></div>
          <div className="atlas-bottom">YOUR NEXT ADVENTURE STARTS HERE <span>↗</span></div>
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, onSelect, index }) {
  return (
    <button className="project-card" onClick={() => onSelect(project)} aria-label={`View ${project.title} project details`}>
      <div className="project-image"><ProjectArtwork kind={project.artwork} /><span className="project-open"><Arrow diagonal /></span></div>
      <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </button>
  )
}

function ProjectDialog({ project, onClose }) {
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

function PageHeading({ label, title, accent, children }) {
  return <div className="page-heading"><span className="eyebrow">{label}</span><h1>{title} <em>{accent}</em></h1><p>{children}</p></div>
}

function Home({ onSelect }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="availability"><span />{portfolio.availability}</div>
          <h1>Thoughtful code.<br />Meaningful<br /><em>experiences.</em><span className="hero-period">✳</span></h1>
          <p>I’m {portfolio.name}, a {portfolio.role.toLowerCase()} who brings ideas to life through clean code and considered design.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow diagonal /></a><a className="text-link" href="#about">A little about me <Arrow /></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" /><span className="art-coordinate">CREATIVITY × TECHNOLOGY</span>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit-core">p<span>c</span><small>DESIGN. BUILD. REPEAT.</small></div>
          <div className="floating-label label-code">&lt;craft /&gt;</div><div className="floating-label label-design">✳ made with intention</div>
          <div className="art-footer"><span>ALWAYS CURIOUS.</span><span>001 — ∞</span></div>
        </div>
      </section>
      <div className="intro-strip"><span>DESIGN MINDED. DETAIL DRIVEN.</span><div>{portfolio.skills.slice(0, 4).map(skill => <span key={skill}>{skill}<i>✳</i></span>)}</div></div>
      <section className="section selected-work">
        <div className="section-heading"><div><span className="eyebrow">A FEW THINGS I’VE BUILT</span><h2>Selected <em>work.</em></h2></div><a className="text-link" href="#projects">All projects <Arrow diagonal /></a></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onSelect={onSelect} />)}</div>
      </section>
      <section className="home-about"><span className="eyebrow">MORE THAN JUST CODE</span><h2>Curiosity is my compass.<br /><em>Making things is my thing.</em></h2><p>{portfolio.shortBio}</p><a className="text-link" href="#about">Meet the person behind the pixels <Arrow diagonal /></a><span className="about-asterisk" aria-hidden="true">✳</span></section>
      <ContactBanner />
    </>
  )
}

function Projects({ onSelect }) {
  const [filter, setFilter] = useState('All')
  const filters = ['All', ...new Set(projects.map(project => project.category))]
  const filtered = projects.filter(project => filter === 'All' || project.category === filter)
  return (
    <>
      <PageHeading label="IDEAS, BROUGHT TO LIFE" title="A collection of" accent="possibilities.">A few explorations in design and development. Each one starts with a question and ends with something you can use.</PageHeading>
      <div className="filter-bar" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? 'filter active' : 'filter'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'All' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div>
      <div className="project-grid projects-page">{filtered.map(project => <ProjectCard key={project.id} project={project} index={projects.indexOf(project)} onSelect={onSelect} />)}</div>
      <p className="template-note">These are sample projects to help you get started. Make this space your own.</p>
      <ContactBanner />
    </>
  )
}

function Experience() {
  return (
    <>
      <PageHeading label="LEARNING. BUILDING. GROWING." title="The journey" accent="so far.">Every role, project, and new challenge adds another layer to how I think and what I create.</PageHeading>
      <section className="experience-layout"><div className="section-aside"><span className="eyebrow">01 / EXPERIENCE</span><h2>Where I’ve<br /><em>made an impact.</em></h2><p>Replace these entries with your roles, internships, freelance work, or volunteering.</p></div>
        <div className="timeline">{experience.map(item => <article className="timeline-item" key={item.role}><div className="timeline-date">{item.dates}<span>{item.type}</span></div><h3>{item.role}</h3><div className="company">{item.company} <Arrow diagonal /></div><p>{item.description}</p><div className="tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>
      <section className="experience-layout education"><div className="section-aside"><span className="eyebrow">02 / EDUCATION</span><h2>A foundation<br /><em>for what’s next.</em></h2></div><article className="education-card"><span className="eyebrow">{portfolio.education.dates}</span><h3>{portfolio.education.degree}</h3><p>{portfolio.education.school}</p><p>{portfolio.education.description}</p></article></section>
      <ContactBanner />
    </>
  )
}

function About() {
  return (
    <>
      <PageHeading label="THE PERSON BEHIND THE PIXELS" title="Hello, I’m" accent={`${portfolio.firstName}.`}>A developer’s brain, a designer’s eye, and a very long list of things I want to learn.</PageHeading>
      <section className="about-layout"><div className="portrait-placeholder"><span className="portrait-label">A LITTLE SNAPSHOT OF ME</span><div className="portrait-monogram">{portfolio.initials}<span>✳</span></div><div className="portrait-caption"><span>{portfolio.name}</span><span>{portfolio.role}</span></div><small>YOUR PHOTO COULD GO HERE</small></div><div className="about-copy"><span className="eyebrow">CURIOUS BY DEFAULT</span><h2>Good work starts<br />with <em>good questions.</em></h2>{portfolio.bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="about-facts"><div><span>BASED IN</span><strong>{portfolio.location}</strong></div><div><span>CURRENTLY</span><strong>{portfolio.availability}</strong></div></div></div></section>
      <section className="section skills-section"><div className="section-heading"><div><span className="eyebrow">MY EVER-EVOLVING TOOLKIT</span><h2>Tools of <em>the trade.</em></h2></div><p>Different tools. One goal: make it meaningful.</p></div><div className="skill-grid">{portfolio.skills.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, '0')}</span><h3>{skill}</h3><Arrow diagonal /></div>)}</div></section>
      <section className="beyond-code"><span className="eyebrow">WHEN THE LAPTOP CLOSES</span><h2>There’s more to <em>the story.</em></h2><div>{portfolio.interests.map(interest => <span key={interest}>{interest}</span>)}</div></section>
      <ContactBanner />
    </>
  )
}

function ContactBanner() {
  return <section className="contact-banner"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let’s make something <em>great.</em></h2></div><a className="round-link" href="#contact" aria-label="Get in touch"><Arrow diagonal /></a></section>
}

function Contact() {
  const [draftOpened, setDraftOpened] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(data.get('subject'))
    const body = encodeURIComponent(`Hi ${portfolio.firstName},\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`)
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`
    setDraftOpened(true)
  }
  return (
    <>
      <PageHeading label="GOOD THINGS START WITH A HELLO" title="Let’s start a" accent="conversation.">Have a project in mind, an opportunity to share, or just want to say hi? I’d love to hear from you.</PageHeading>
      <section className="contact-layout"><div className="contact-info"><div className="availability"><span />{portfolio.availability}</div><h2>My inbox is<br /><em>always open.</em></h2><p>The best ideas often start with a simple conversation. Tell me what you’re thinking.</p><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email}<Arrow diagonal /></a><div className="social-links">{portfolio.socials.map(social => <a href={social.url} key={social.name} target="_blank" rel="noreferrer">{social.name}<Arrow diagonal /></a>)}</div><div className="contact-note"><span aria-hidden="true">✳</span><p>No big pitch needed.<br />A simple hello is a great start.</p></div></div>
        <form className="contact-form" onSubmit={handleSubmit} onChange={() => setDraftOpened(false)}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Smith" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} /></label></div><label>What’s on your mind?<select name="subject" defaultValue="Let’s work together"><option>Let’s work together</option><option>A job opportunity</option><option>Just saying hello</option><option>Something else</option></select></label><label>Your message<textarea name="message" rows={5} placeholder="A little about your idea, project, or question…" required maxLength={4000} /></label><button className="button button-primary" type="submit">Create email draft <Arrow diagonal /></button><p className="form-note">Opens your email app with your message filled in. Nothing is sent or stored by this website.</p>{draftOpened && <p className="form-status" role="status">Your email app was requested. Review and send the draft there, or email {portfolio.email} directly if it didn’t open.</p>}</form>
      </section>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState(getPage)
  const [menuOpen, setMenuOpen] = useState(false)
  const [project, setProject] = useState(null)
  const main = useRef(null)
  useEffect(() => {
    function navigate() {
      setPage(getPage())
      setMenuOpen(false)
      setProject(null)
      window.scrollTo({ top: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
    }
    window.addEventListener('hashchange', navigate)
    return () => window.removeEventListener('hashchange', navigate)
  }, [])
  useEffect(() => {
    const title = pages.find(item => item.toLowerCase() === page) || 'Page not found'
    document.title = `${title} — ${portfolio.name} · ${portfolio.role}`
  }, [page])
  const content = {
    home: <Home onSelect={setProject} />,
    projects: <Projects onSelect={setProject} />,
    experience: <Experience />,
    about: <About />,
    contact: <Contact />,
  }
  return (
    <>
      <a className="skip-link" href="#main-content" onClick={event => { event.preventDefault(); main.current?.focus() }}>Skip to content</a>
      <header className="site-header"><div className="header-inner"><a className="brand" href="#home" aria-label={`${portfolio.name}, home`}><span className="brand-mark">{portfolio.initials.toLowerCase()}<b>.</b></span><span>{portfolio.name}<small>{portfolio.role}</small></span></a><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button><nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">{pages.map(item => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)} aria-current={page === item.toLowerCase() ? 'page' : undefined} className={`${page === item.toLowerCase() ? 'nav-active' : ''} ${item === 'Contact' ? 'nav-contact' : ''}`}>{item === 'Contact' ? 'Let’s talk' : item}{item === 'Contact' && <Arrow diagonal />}</a>)}</nav></div></header>
      <main id="main-content" className="container" ref={main} tabIndex={-1}><div className="page-enter" key={page}>{Object.hasOwn(content, page) ? content[page] : <section className="not-found"><PageHeading label="404 / A LITTLE OFF THE PATH" title="Nothing" accent="here yet.">Let’s get you back to something good.</PageHeading><a className="button button-primary" href="#home">Back to home <Arrow /></a></section>}</div></main>
      <footer className="site-footer container"><a className="footer-brand" href="#home">{portfolio.name}<span>Design minded. Detail driven.</span></a><p>© {currentYear} {portfolio.name}</p><span className="footer-credit">Built with React & a little curiosity <span aria-hidden="true">↗</span></span></footer>
      {project && <ProjectDialog project={project} onClose={() => setProject(null)} />}
    </>
  )
}
