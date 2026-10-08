import { useEffect, useRef, useState } from 'react'
import { portfolio } from './data'
import './App.css'
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Experience from "./Pages/Experience.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import ProjectDialog from "./Components/ProjectDialog.jsx";
import Arrow from "./Components/Arrow.jsx";

const pages = ['Home', 'Projects', 'Experience', 'About', 'Contact']
const currentYear = new Date().getFullYear()
const getPage = () => window.location.hash.slice(1).toLowerCase() || 'home'

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
      <header className="site-header">
          <div className="header-inner">
              <a className="brand" href="#home" aria-label={`${portfolio.name}, home`}>
                  <span className="brand-mark">{portfolio.initials.toLowerCase()}<b>.</b></span>
                  <span>{portfolio.name}<small>{portfolio.role}</small></span>
              </a>
              <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
              <nav id="main-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
                  {pages.map(item => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)} aria-current={page === item.toLowerCase() ? 'page' : undefined} className={`${page === item.toLowerCase() ? 'nav-active' : ''} ${item === 'Contact' ? 'nav-contact' : ''}`}>{item === 'Contact' ? 'Let’s talk' : item}{item === 'Contact' && <Arrow diagonal />}</a>)}
              </nav>
          </div>
      </header>
      <main id="main-content" className="container" ref={main} tabIndex={-1}>
          <div className="page-enter" key={page}>
              {Object.hasOwn(content, page) ? content[page] :
                  <section className="not-found">
                      <PageHeading label="404 / A LITTLE OFF THE PATH" title="Nothing" accent="here yet.">
                          Let’s get you back to something good.
                      </PageHeading>
                      <a className="button button-primary" href="#home">
                          Back to home <Arrow />
                      </a>
                  </section>}
          </div>
      </main>
      <footer className="site-footer container">
          <a className="footer-brand" href="#home">{portfolio.name}
              <span>Design minded. Detail driven.</span>
          </a>
          <p>© {currentYear} {portfolio.name}</p>
          <span className="footer-credit">Built with React & a little curiosity <span aria-hidden="true">↗</span>
          </span>
      </footer>
      {project && <ProjectDialog project={project} onClose={() => setProject(null)} />}
    </>
  )
}
