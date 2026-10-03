import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, MapPin,
  Code2, Cloud, Database, Award, Menu, X
} from "lucide-react";
import "./styles.css";

const skills = {
  Frontend: ["ReactJS", "NextJS", "JavaScript", "TypeScript", "HTML", "CSS", "Redux", "Tailwind CSS", "SASS"],
  Backend: ["NodeJS", "ExpressJS", "GraphQL", "REST APIs"],
  Cloud: ["Azure", "Azure Serverless Functions", "Azure Event Grid", "Jenkins", "Azure DevOps"],
  Tools: ["MongoDB", "Cosmos DB", "Jest", "Cypress", "Babel", "Webpack", "ESLint", "Git", "Postman", "Firebase"]
};

const experience = [
  {
    role: "Software Developer",
    company: "Cogitate Technology Solutions",
    location: "Navi Mumbai",
    period: "04/2025 — Present",
    points: [
      "Implemented a generic Azure Queue Trigger function for multi-client document generation, reducing processing time by 100% and increasing parallel handling capacity by 300%.",
      "Designed a frontend framework using ReactJS, NextJS and Redux, integrated with NodeJS, GraphQL and Azure Serverless Functions.",
      "Used Jenkins and Azure DevOps for deployments, and Jest and Cypress for testing and build quality, contributing to a 20% reduction in bug counts."
    ]
  },
  {
    role: "Associate Software Developer",
    company: "Cogitate Technology Solutions",
    location: "Navi Mumbai",
    period: "09/2023 — 04/2025",
    points: [
      "Introduced an event-driven microservice architecture using Azure Event Grid and Azure HTTP, Event and Time Trigger Functions.",
      "Integrated DocuSign API for refined document signing, enabling faster insurance binding and reducing manual agent intervention.",
      "Contributed to scalable application development and performance improvements across the platform."
    ]
  },
  {
    role: "Intern Trainer",
    company: "Sumfactor Technology Solution",
    location: "Chandigarh · Remote",
    period: "04/2023 — 08/2023",
    points: [
      "Developed and maintained responsive web interfaces using HTML, CSS, JavaScript and React.js.",
      "Built and enhanced 10+ reusable React components, improving consistency and reducing duplicate UI development.",
      "Implemented responsive designs across desktop, tablet and mobile screen sizes.",
      "Identified and resolved 20+ UI and functional issues during development and testing."
    ]
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go("home")}>AY<span>.</span></button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {["about", "skills", "experience", "achievements", "contact"].map(x =>
              <button key={x} onClick={() => go(x)}>{x[0].toUpperCase() + x.slice(1)}</button>
            )}
          </nav>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">FRONTEND DEVELOPER · MERN STACK</p>
            <h1>Building <em>scalable</em> digital experiences.</h1>
            <p className="lead">
              I’m Anjali Yadav, a Frontend Developer with 3 years of experience
              building user-centric web applications and working across modern
              React, Node.js and Azure technologies.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go("contact")}>Let’s connect <ArrowUpRight size={17} /></button>
              <a className="secondary" href="/Anjali_Yadav_Resume.docx" download><Download size={17} /> Resume</a>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/anjali-yadav-51828622a" target="_blank" rel="noreferrer"><Linkedin size={19} /> LinkedIn</a>
              <a href="mailto:anjaliruby790@gmail.com"><Mail size={19} /> Email</a>
              <span><MapPin size={19} /> Navi Mumbai</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="terminal">
              <div className="dots"><i /><i /><i /></div>
              <div className="code">
                <p><span className="pink">const</span> developer = {'{'}</p>
                <p className="indent"><span className="blue">name</span>: <span className="green">"Anjali Yadav"</span>,</p>
                <p className="indent"><span className="blue">role</span>: <span className="green">"Frontend Developer"</span>,</p>
                <p className="indent"><span className="blue">stack</span>: [<span className="green">"React"</span>, <span className="green">"Node"</span>, <span className="green">"Azure"</span>],</p>
                <p className="indent"><span className="blue">experience</span>: <span className="orange">"3 years"</span></p>
                <p>{'}'}</p>
                <p className="cursor">▌</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-head"><span>01</span><h2>About me</h2></div>
          <div className="about-grid">
            <div>
              <p className="big-copy">A developer who enjoys turning complex requirements into clean, reliable interfaces.</p>
            </div>
            <div className="about-text">
              <p>Frontend Developer with 3 years of experience in MERN stack development. I collaborate with cross-functional teams to solve problems, communicate effectively, and build scalable, user-centric web applications.</p>
              <p>My experience spans frontend architecture, responsive UI development, APIs, cloud services, event-driven systems, testing and CI/CD.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section tinted">
          <div className="section-head"><span>02</span><h2>Technical skills</h2></div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items], i) => (
              <article className="skill-card" key={group}>
                <div className="skill-icon">{i === 0 ? <Code2 /> : i === 1 ? <Database /> : i === 2 ? <Cloud /> : <Code2 />}</div>
                <h3>{group}</h3>
                <div className="chips">{items.map(s => <span key={s}>{s}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head"><span>03</span><h2>Experience</h2></div>
          <div className="timeline">
            {experience.map((job, i) => (
              <article className="job" key={job.role}>
                <div className="job-marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="job-body">
                  <div className="job-top">
                    <div><h3>{job.role}</h3><p className="company">{job.company} · {job.location}</p></div>
                    <span className="period">{job.period}</span>
                  </div>
                  <ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section tinted">
          <div className="section-head"><span>04</span><h2>Achievement & education</h2></div>
          <div className="achievement-grid">
            <article className="feature-card">
              <Award size={30} />
              <p className="card-label">ACHIEVEMENT</p>
              <h3>Rockstar Award</h3>
              <p>Awarded in 2022 for Exceptional Performance at Cogitate.</p>
            </article>
            <article className="feature-card">
              <Code2 size={30} />
              <p className="card-label">EDUCATION</p>
              <h3>B.Tech — Electrical & Electronics Engineering</h3>
              <p>Krishna Engineering College, Ghaziabad · GPA 7.60 · 2019</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <p className="eyebrow">LET’S WORK TOGETHER</p>
            <h2>Have a project or opportunity in mind?</h2>
            <p>Feel free to reach out. I’d be happy to connect and discuss it.</p>
            <div className="actions">
              <a className="primary" href="mailto:anjaliruby790@gmail.com">Send an email <ArrowUpRight size={17} /></a>
              <a className="secondary dark" href="https://www.linkedin.com/in/anjali-yadav-51828622a" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Anjali Yadav</span><span>Frontend Developer · MERN Stack</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
