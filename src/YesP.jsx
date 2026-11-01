
import React from "react";
import { ArrowLeft, ArrowUpRight, ArrowDown, ArrowRight } from "lucide-react";
import "./yesp.css";

const images = [
  {
    src: "/images/eligibility-form1.png",
    alt: "YES-P eligibility assessment form, first section",
    number: "01",
    title: "Starting with the person",
    description:
      "The assessment begins by collecting information about the applicant and their business.",
  },
  {
    src: "/images/eligibility-form2.png",
    alt: "YES-P eligibility assessment form, second section",
    number: "02",
    title: "Understanding eligibility",
    description:
      "Applicants provide further details used to assess their alignment with the programme criteria.",
  },
  {
    src: "/images/eligibility-results(text).png",
    alt: "YES-P text-based eligibility results and explanations",
    number: "03",
    title: "Making the decision understandable",
    description:
      "Written explanations communicate the assessment outcome, criterion scores and personalised feedback.",
  },
  {
    src: "/images/eligibility-results(visual).png",
    alt: "YES-P visual eligibility results with radar chart",
    number: "04",
    title: "Seeing the bigger picture",
    description:
      "A radar chart provides a visual representation of performance across the assessment criteria.",
  },
  {
    src: "/images/submission-history.png",
    alt: "YES-P assessment submission history",
    number: "05",
    title: "Keeping track",
    description:
      "The submission history allows applicants to revisit their previous assessments.",
  },
];

function YesP() {
  return (
    <main className="yesp-page">
      <nav className="yesp-nav">
        <a href="/" className="yesp-back">
          <ArrowLeft size={16} />
          <span>Back to portfolio</span>
        </a>
        <span className="yesp-nav-label">IN-BETWEEN / SELECTED WORK</span>
      </nav>

      <section className="yesp-hero">
        <p className="yesp-eyebrow">01 / HUMAN–AI INTERACTION · FINAL YEAR PROJECT</p>

        <h1>Can an AI decision explain itself?</h1>

        <p className="yesp-intro">
          Exploring how young Nigerian SME owners understand AI-supported
          loan eligibility assessments through clear, accessible explanations.
        </p>

        <div className="yesp-meta">
          <div>
            <span>PROJECT</span>
            <p>YES-P Eligibility Assessment System</p>
          </div>
          <div>
            <span>ROLE</span>
            <p>Researcher & Developer</p>
          </div>
          <div>
            <span>YEAR</span>
            <p>2026</p>
          </div>
          <div>
            <span>FOCUS</span>
            <p>HCI · Explainable AI · Human–AI Interaction</p>
          </div>
        </div>

        <a href="#overview" className="yesp-scroll">
          EXPLORE THE PROJECT <ArrowDown size={15} />
        </a>
      </section>

      <section className="yesp-section yesp-overview" id="overview">
        <div className="yesp-section-label">01 / THE CONTEXT</div>

        <div className="yesp-section-content">
          <h2>When a decision affects someone's next step, understanding matters.</h2>

          <p>
            Access to funding can shape the growth of small businesses.
            Yet, navigating loan eligibility requirements can be difficult,
            particularly when applicants are unsure how their circumstances
            align with programme criteria.
          </p>

          <p>
            I explored how an AI-supported eligibility assessment system
            could make this process more understandable for young Nigerian
            entrepreneurs, helping them see where they stand and why.
          </p>

          <p className="yesp-note">
            The system provides an advisory eligibility assessment. It does
            not approve or reject loan applications.
          </p>
        </div>
      </section>

      <section className="yesp-section yesp-challenge">
        <div className="yesp-section-label">02 / THE QUESTION</div>

        <div className="yesp-section-content">
          <p className="yesp-small-heading">THE DESIGN CHALLENGE</p>
          <h2>How might we make AI-supported eligibility assessments easier to understand?</h2>

          <p>
            Rather than focusing only on whether the system could produce an
            eligibility result, I wanted to investigate how that result was
            communicated to the person receiving it.
          </p>

          <div className="yesp-question">
            <span>THE CENTRAL QUESTION</span>
            <p>
              How do different explanation formats influence users'
              understanding, trust and perceived fairness?
            </p>
          </div>
        </div>
      </section>

      <section className="yesp-section yesp-approach">
        <div className="yesp-section-label">03 / THE APPROACH</div>

        <div className="yesp-section-content">
          <h2>Building an assessment that can communicate its reasoning.</h2>

          <p>
            The YES-P Eligibility Assessment System was developed around
            the Bank of Industry's YES-P programme criteria. It combines
            eligibility checks with a retrieval-augmented generation
            approach to provide contextual explanations.
          </p>

          <div className="yesp-tech-grid">
            <div>
              <span>01</span>
              <h3>Eligibility assessment</h3>
              <p>Evaluates applicant information against programme criteria.</p>
            </div>
            <div>
              <span>02</span>
              <h3>AI-supported feedback</h3>
              <p>Uses retrieved programme information to generate contextual feedback.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Dual explanations</h3>
              <p>Presents assessment information through written and visual formats.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="yesp-gallery-section">
        <div className="yesp-section-label">04 / THE EXPERIENCE</div>

        <div className="yesp-gallery-heading">
          <h2>From information to understanding.</h2>
          <p>
            A closer look at the experience, from entering applicant
            information to interpreting an assessment result.
          </p>
        </div>

        <div className="yesp-gallery">
          {images.map((item) => (
            <figure className="yesp-gallery-item" key={item.number}>
              <div className="yesp-image-wrap">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <figcaption>
                <span>{item.number} /</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="yesp-section yesp-evaluation">
        <div className="yesp-section-label">05 / WHAT I LEARNED</div>

        <div className="yesp-section-content">
          <p className="yesp-small-heading">USER EVALUATION</p>
          <h2>But did people actually understand the explanations?</h2>

          <p>
            I evaluated the system with 50 Nigerian youth SME owners.
            Participants completed a post-interaction survey measuring
            perceived ease of use, usefulness, understanding, fairness
            and trust.
          </p>

          <div className="yesp-stat-grid">
            <div>
              <strong>50</strong>
              <span>PARTICIPANTS</span>
            </div>
            <div>
              <strong>5.74<span>/7</span></strong>
              <span>OVERALL UNDERSTANDING</span>
            </div>
            <div>
              <strong>5.96<span>/7</span></strong>
              <span>WRITTEN EXPLANATION</span>
            </div>
            <div>
              <strong>5.68<span>/7</span></strong>
              <span>VISUAL EXPLANATION</span>
            </div>
          </div>

          <div className="yesp-finding">
            <span>AN INTERESTING FINDING</span>
            <h3>Sometimes, seeing is not the same as understanding.</h3>
            <p>
              Written feedback received a higher average understanding
              score than the visual radar chart. This highlighted the
              importance of considering how people interpret different
              forms of explanation, rather than assuming that visual
              information is automatically clearer.
            </p>
          </div>
        </div>
      </section>

      <section className="yesp-section yesp-reflection">
        <div className="yesp-section-label">06 / REFLECTION</div>

        <div className="yesp-section-content">
          <h2>Technology should not just make decisions. It should help people make sense of them.</h2>

          <p>
            This project strengthened my interest in human–AI interaction
            and the design of understandable, accessible technology.
            It also reinforced that an explanation is only useful when
            the person receiving it can interpret and act on it.
          </p>

          <p>
            For me, the most important part of this project was looking
            beyond the system's output to the experience of the person
            receiving it.
          </p>
        </div>
      </section>

      <footer className="yesp-footer">
        <a href="/" className="yesp-back">
          <ArrowLeft size={16} /> Back to IN-BETWEEN
        </a>
        <a href="mailto:opeash234@gmail.com" className="yesp-contact">
          Let's talk about it <ArrowUpRight size={16} />
        </a>
      </footer>
    </main>
  );
}

export default YesP;
