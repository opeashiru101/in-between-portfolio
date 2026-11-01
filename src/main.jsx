import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Menu,
  X,
  MoveUpRight,
  Sparkles
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    type: 'HUMAN–AI INTERACTION / FINAL YEAR PROJECT',
    year: '2026',
    title: 'Can an AI decision explain itself?',
    description:
      'An explainable loan eligibility assessment system exploring how people understand AI-supported decisions and how different explanation formats shape that experience.',
    contribution:
      'I designed and implemented the system, developed its explanation interface and evaluated how Nigerian SME owners understood its text-based and visual explanations.',
    tags: ['HCI', 'Explainable AI', 'Human–AI Interaction', 'Research'],
    images: [
      {
        src: '/images/eligibility-form1.png',
        alt: 'YES-P eligibility assessment form'
      },
      {
        src: '/images/eligibility-form2.png',
        alt: 'YES-P eligibility form continued'
      },
      {
        src: '/images/eligibility-results(text).png',
        alt: 'YES-P eligibility results with text-based explanation'
      },
      {
        src: '/images/eligibility-results(visual).png',
        alt: 'YES-P eligibility results with visual explanation'
      },
      {
        src: '/images/submission-history.png',
        alt: 'YES-P assessment submission history'
      }
    ],
    reflection:
      'One of the questions that interested me most was whether presenting the same information in different ways could change how people understood an AI-supported decision.'
  },
  {
    number: '02',
    type: 'INTERACTION DESIGN / INDUSTRY EXPERIENCE',
    year: '2025',
    title: 'Making a workflow make sense.',
    description:
      'An intern management system developed during my UX/UI design internship at MTN, focused on organising workflows and making tasks easier to navigate.',
    contribution:
      'Working as part of a design team, I helped map user flows, translate requirements into interface screens and refine designs through feedback.',
    tags: ['Interaction Design', 'User Flows', 'Figma', 'Team Collaboration'],
    images: [
      {
        src: '/images/mtn-user-flow.png',
        alt: 'Complete user flow for the MTN intern management system'
      },
      {
        src: '/images/mtn-screen-1.png',
        alt: 'MTN intern management system interface screen one'
      },
      {
        src: '/images/mtn-screen-2.png',
        alt: 'MTN intern management system interface screen two'
      },
      {
        src: '/images/mtn-screen-3.png',
        alt: 'MTN intern management system interface screen three'
      }
    ],
    reflection:
      'This experience helped me appreciate how much thought goes into the steps between a user having a task and successfully completing it.'
  },
  {
    number: '03',
    type: 'USER RESEARCH / PRODUCT DESIGN',
    year: '2025',
    title: 'Designing for connection.',
    description:
      'gConnect is a social media application concept developed as a team project, exploring its core features and the experiences it could offer its users.',
    contribution:
      'I worked with the design team on user research and defining key features and requirements. I also contributed wireframes and high-fidelity interface designs for core user journeys, using a simple design system to maintain consistency.',
    tags: ['User Research', 'Product Design', 'Wireframing', 'Figma'],
    images: [
      {
        src: '/images/gtconnect-screen-1.png',
        alt: 'gConnect social media application interface one'
      },
      {
        src: '/images/gtconnect-screen-2.png',
        alt: 'gConnect social media application interface two'
      },
      {
        src: '/images/gtconnect-screen-3.png',
        alt: 'gConnect social media application interface three'
      }
    ],
    reflection:
      'The project gave me an opportunity to think about how research, feature decisions and interface consistency come together in a digital product.'
  }
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-heading">
        <div>
          <span className="project-number">{project.number}</span>
          <span className="project-type">{project.type}</span>
        </div>
        <span className="project-year">{project.year}</span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-gallery">
        {project.images.map((image, index) => (
          <figure className="project-image" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            <figcaption>
              {project.number}.{String(index + 1).padStart(2, '0')}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="project-details">
        <div className="project-contribution">
          <span className="detail-label">MY CONTRIBUTION</span>
          <p>{project.contribution}</p>
        </div>

        <div className="project-reflection">
          <span className="detail-label">A THOUGHT I TOOK AWAY</span>
          <p>{project.reflection}</p>
        </div>
      </div>

      <div className="tag-list">
  {project.tags.map((tag) => (
    <span key={tag}>{tag}</span>
  ))}
</div>

{project.number === '01' && (
  <a href="/yesp.html" className="project-case-study-link">
    Explore case study <ArrowUpRight size={16} />
  </a>
)}
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const questions = [
    {
      label: 'A QUESTION I KEEP COMING BACK TO',
      title: 'What makes an AI explanation actually useful to a human?',
      note: 'This question shaped my explainable AI project.'
    },
    {
      label: 'A QUESTION I KEEP COMING BACK TO',
      title: 'How do we make digital experiences work for more kinds of people?',
      note: 'I’m interested in accessibility, context and the details we often overlook.'
    },
    {
      label: 'A QUESTION I KEEP COMING BACK TO',
      title: 'Can technology feel less like a tool and more like a conversation?',
      note: 'I’m curious about the boundaries between people, systems and emerging interfaces.'
    }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          in-between<span>®</span>
        </a>

        <nav
          className={menuOpen ? 'nav nav-open' : 'nav'}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About me <span>02</span></a>
          <a href="#now" onClick={closeMenu}>Now / next <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-topline">
            <span><i className="status-dot" /> OPEN TO OPPORTUNITIES & COLLABORATION</span>
            <span className="mono">LAGOS, NIGERIA</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <Asterisk size={17} />
                COMPUTER SCIENCE × HUMAN-CENTRED TECHNOLOGY
              </p>

              <h1>
                I’m curious about the space
                <em> between </em>
                people & technology.
              </h1>

              <p className="hero-intro">
                Hello there! I’m Opemipo, an HCI enthusiast exploring how
                people experience, understand and interact with technology.
                Sometimes I build. Sometimes I investigate. Usually, I have
                questions (a lot of them).
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowDownRight size={17} />
                </a>
                <a className="text-link" href="#about">
                  A little about me <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="hero-art" aria-label="An abstract editorial illustration about human connection and technology">
              <div className="hero-art-note note-top">A LITTLE BIT OF THIS</div>
              <div className="hero-art-shape shape-one" />
              <div className="hero-art-shape shape-two" />
              <div className="hero-art-circle">HUMAN<br />×<br />TECH</div>
              <span className="hero-art-star star-one">✳</span>
              <span className="hero-art-star star-two">✳</span>
              <div className="hero-art-note note-bottom">A LOT OF CURIOSITY.</div>
              <span className="hero-art-caption">FIG. 001 — IN-BETWEEN STATES</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span className="mono">SCROLL TO EXPLORE</span>
            <div className="scroll-line"><span /></div>
            <span className="mono">A WORK IN PROGRESS — LIKE ME</span>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {Array.from({ length: 2 }, (_, index) => (
              <React.Fragment key={index}>
                <span>HUMAN–COMPUTER INTERACTION</span>
                <Asterisk />
                <span>EXPLAINABLE AI</span>
                <Asterisk />
                <span>INTERACTION DESIGN</span>
                <Asterisk />
                <span>ACCESSIBILITY</span>
                <Asterisk />
                <span>CREATIVE TECHNOLOGY</span>
                <Asterisk />
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="section-index">01</span> SELECTED EXPLORATIONS</p>
              <h2>Things I’ve made,<br /><em>questions I’ve chased.</em></h2>
            </div>
            <p className="section-aside">
              A few snapshots of how I think, make and learn. Each one starts
              with a question.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <section className="question-section section-wrap" id="now">
          <div className="question-art">
            <span className="question-art-label">CURIOSITY, IN PROGRESS</span>
            <div className="question-art-shape" />
            <span className="question-art-star">✳</span>
            <span className="question-art-caption">ALWAYS ASKING WHY.</span>
          </div>

          <div className="question-content">
            <p className="eyebrow"><span className="section-index">03</span> CURRENTLY TURNING OVER</p>
            <p className="question-label">{questions[activeQuestion].label}</p>
            <h2>{questions[activeQuestion].title}</h2>
            <p className="question-note">{questions[activeQuestion].note}</p>

            <div className="question-controls">
              <span className="mono">0{activeQuestion + 1} / 0{questions.length}</span>
              <div className="question-buttons">
                {questions.map((question, index) => (
                  <button
                    key={question.title}
                    className={activeQuestion === index ? 'question-dot active' : 'question-dot'}
                    aria-label={`Show question ${index + 1}`}
                    aria-pressed={activeQuestion === index}
                    onClick={() => setActiveQuestion(index)}
                  />
                ))}
              </div>
              <button
                className="next-question"
                aria-label="Next question"
                onClick={() => setActiveQuestion((activeQuestion + 1) % questions.length)}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-top">
            <p className="eyebrow"><span className="section-index">02</span> THE HUMAN BEHIND THE HYPERLINKS</p>
            <span className="mono">A SHORT INTRODUCTION</span>
          </div>

          <div className="about-grid">
            <h2>
              I pay attention to <em>the details.</em>
              <br />
              Especially the ones <span>people miss.</span>
            </h2>

            <div className="about-copy">
              <p>
                I’m Opemipo, a Computer Science graduate interested in the
                space where people, technology and everyday experiences meet.
                HCI is the part of tech that makes me ask more questions, not fewer.
              </p>
              <p>
                I’m observant, a little prone to overthinking, and very
                particular about getting things right. I like understanding
                why something works, where it falls short, and how it could
                work better for someone else. For me, the details aren’t
                distractions; they’re often where the interesting stuff begins.
              </p>
              <p>
                Outside technology, you’ll probably find me reading Nigerian
                literature, wandering through mythology and dark academia,
                writing something, or helping bring people together around
                something that matters. I’m drawn to stories, ideas and
                experiences that make me see the world a little differently.
              </p>
              <p>
                I’m still figuring out all the places this curiosity can take
                me: human–computer interaction, accessible experiences,
                human–AI interaction and emerging technology. I don’t need
                to have every answer yet. I want to keep asking better questions.
              </p>
              <div className="about-signoff">Still curious. Still becoming. <span>↗</span></div>
            </div>
          </div>

          <div className="interest-strip">
            <span className="mono">OUTSIDE THE MAIN QUEST</span>
            <div className="interest-pills">
              <span>Nigerian literature</span>
              <span>Mythology & folklore</span>
              <span>Writing</span>
              <span>Community building</span>
              <span>Emerging technology</span>
            </div>
          </div>
        </section>

        <section className="now-section section-wrap">
          <div className="now-card">
            <div className="now-card-head">
              <span className="eyebrow"><Asterisk size={15} /> FIELD NOTES</span>
              <span className="mono">A CHAPTER IN PROGRESS</span>
            </div>

            <h2>Things I’m exploring<br /><em>in this chapter.</em></h2>

            <div className="now-items">
              <div>
                <span className="now-number">01</span>
                <div>
                  <h3>Human–AI interaction</h3>
                  <p>How explanations, trust and user control shape the experience of AI.</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
              <div>
                <span className="now-number">02</span>
                <div>
                  <h3>Accessible experiences</h3>
                  <p>Designing for different needs, contexts and ways of interacting.</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
              <div>
                <span className="now-number">03</span>
                <div>
                  <h3>Building on the web</h3>
                  <p>Getting more confident with frontend development by making things I care about.</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
            </div>

            <p className="now-disclaimer">
              These are current interests, not claims of expertise. The point is to keep learning in public.
            </p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top">
            <p className="eyebrow"><span className="section-index">04</span> THE NEXT INTERESTING THING</p>
            <Sparkles size={24} strokeWidth={1} />
          </div>

          <h2>Have a question,<br />an idea, or a <em>possibility?</em></h2>

          <p className="contact-intro">
            I’m open to conversations about HCI, experience design, research,
            creative technology and opportunities to learn by doing.
          </p>

          <a className="contact-email" href="mailto:opeash234@gmail.com">
            Let’s talk <MoveUpRight size={24} />
          </a>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/opemipo-ashiru-5ab597298" target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/opeashiru101" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href="/Opemipo_Ashiru_New.pdf" target="_blank" rel="noreferrer">
              View my CV <ArrowUpRight size={14} />
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top">in-between<span>®</span></a>
        <span className="footer-note">Made with curiosity, code & too many open tabs.</span>
        <span className="mono">© OPEMIPO ASHIRU 2026</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);