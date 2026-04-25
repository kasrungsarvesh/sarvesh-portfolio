import './App.css'
import {
  achievementMetrics,
  certifications,
  contactLinks,
  focusAreas,
  processSteps,
  profile,
  projects,
  proofPoints,
  quickFacts,
  strengths,
  techStacks,
} from './portfolioData.js'

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="portfolio-app">
      <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to top of portfolio">
          <span className="brand-mark">SK</span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#skills">Skills</a>
          <a href="#credentials">Credentials</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <article className="panel hero-copy-panel">
            <p className="eyebrow accent-chip">{profile.availability}</p>
            <h1>{profile.headline}</h1>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-intro-grid">
              {strengths.map((item) => (
                <article className="insight-card" key={item.title}>
                  <p className="mini-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <a className="button primary-button" href="#projects">
                Explore Projects
              </a>
              <a
                className="button secondary-button"
                href="https://github.com/kasrungsarvesh"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub
              </a>
            </div>

            <div className="hero-detail-grid">
              <div className="metrics-grid">
                {achievementMetrics.map((metric) => (
                  <article className="metric-card" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>

              <article className="hero-callout-card">
                <p className="mini-label">Professional Value</p>
                <h3>Clean execution with practical product thinking</h3>
                <p>
                  I focus on building interfaces that look polished, workflows that feel clear,
                  and systems that are easier to maintain as they grow.
                </p>
              </article>
            </div>
          </article>

          <aside className="hero-sidebar">
            <article className="panel profile-card">
              <p className="mini-label">Professional Profile</p>
              <h2>{profile.name}</h2>
              <p className="role-line">{profile.role}</p>

              <div className="status-row">
                <span>{profile.location}</span>
                <span>Available for new opportunities</span>
              </div>

              <div className="fact-list">
                {quickFacts.map((fact) => (
                  <div className="fact-item" key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel note-card">
              <p className="mini-label">Why I Build</p>
              <p>{profile.callout}</p>
            </article>
          </aside>
        </section>

        <section className="section" id="about">
          <SectionHeading
            eyebrow="About"
            title="Building dependable software with a practical, business-first mindset."
            description="I focus on turning requirements into polished applications with clean interfaces, structured backend logic, reliable database workflows, and deployment-ready delivery."
          />

          <div className="story-grid">
            <article className="panel story-card">
              <p>{profile.narrative}</p>
              <p>
                From management systems to utility products, I aim to create software that feels
                professional to use, is stable in daily operations, and is organized for future
                growth.
              </p>
            </article>

            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="panel focus-card" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="expertise">
          <SectionHeading
            eyebrow="Expertise"
            title="What I bring to modern product and business application development."
            description="My projects combine frontend quality, backend structure, and workflow thinking so the final result is not only functional, but production-aware and easier to maintain."
          />

          <div className="proof-grid expertise-grid">
            {proofPoints.map((point) => (
              <article className="proof-card" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Languages, frameworks, databases, and tools"
            description="My stack covers frontend development, backend engineering, API testing, and database work across both learning projects and practical software builds."
          />

          <div className="stack-grid">
            {techStacks.map((group) => (
              <article className="panel stack-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="credentials">
          <SectionHeading
            eyebrow="Credentials"
            title="Certification and continuous learning"
            description="Formal training that supports my full stack development foundation and practical project work."
          />

          <div className="credentials-grid">
            {certifications.map((item) => (
              <article className="panel credential-card" key={item.title}>
                <p className="project-category">{item.category}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Projects that demonstrate application logic, usability, and workflow thinking"
            description="These projects show how I approach system design, interface building, data handling, and real-world problem solving across business and utility-focused applications."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article className="panel project-card" key={project.title}>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-outcome">{project.outcome}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <span className="project-highlight" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span className="chip subtle-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="process">
          <SectionHeading
            eyebrow="Process"
            title="A development process centered on clarity, execution, and reliability"
            description="I try to keep the process simple: understand the workflow, build with structure, and refine the final solution so it is ready for actual use."
          />

          <div className="process-grid">
            {processSteps.map((item) => (
              <article className="panel process-card" key={item.step}>
                <span className="process-step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <article className="panel contact-lead">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect for full stack development opportunities.</h2>
            <p>
              You can reach me through email, LinkedIn, or GitHub to discuss projects, job
              opportunities, and collaboration.
            </p>
          </article>

          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a
                className="panel contact-card"
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{profile.name}</p>
        <p>{profile.role}</p>
      </footer>
    </div>
  )
}

export default App
