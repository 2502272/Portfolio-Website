// Main Portfolio Website Structure and Layout (ALL IN ONE FILE)
// Fully optimized for Tayyab Mahmood Adil

import { useState } from "react"

import profileImage from "./assets/Profile_Photo.jpg"
import cvFile from "./assets/Tayyab_Mahmood_CV.pdf"

// Project detail page component imports
import F1HelmetProject from "./F1HelmetProject.jsx"
import RoboticLegProject from "./RoboticLegProject.jsx"
import HammerProject from "./HammerProject.jsx"
import V6Engine from "./V6Engine.jsx"
import TrussBridgeProject from "./TrussBridgeProject.jsx"
import HostelManagementProject from "./HostelManagementProject.jsx"

// Projects Data - Sequential mapping matching image and asset requirements
const projects = [
  {
    id: 1,
    title: "F1 Helmet Design",
    tech: "SolidWorks 2022",
    description: "Designed using advanced aerodynamic surfacing techniques based on 2D reference blueprints. Applied complex surface modeling tools to achieve highly accurate shell geometry and fluid alignment.",
    image: "./assets/projects/f1-helmet.jpg"
  },
  {
    id: 2,
    title: "Robotic Leg Mechanism",
    tech: "SolidWorks 2022",
    description: "Modeled a complete robotic leg with a full joint assembly layout and mechanical motion simulation. Simulated precise ranges of motion to verify mechanism behavior under fixed movement constraints.",
    image: "./assets/projects/robotic-leg.jpg"
  },
  {
    id: 3,
    title: "Multifunctional Hammer",
    tech: "SolidWorks + Workshop Project",
    description: "Designed and physically fabricated a multi-use hammer intended to consolidate multiple workshop hand-tools. Gained extensive hands-on experience working directly with precision machining tolerances.",
    image: "./assets/projects/multi-hammer.jpg"
  },
  {
    id: 4,
    title: "V6 Engine",
    tech: "AutoCAD 2019",
    description: "Recreated intricate internal combustion engine geometry focusing strictly on component tolerances and assembly constraints. Developed a deep understanding of component relationships and industrial fit clearances.",
    image: "./assets/projects/v6-engine.jpg"
  },
  {
    id: 5,
    title: "Truss Bridge",
    tech: "SolidWorks + 3D Printed",
    description: "Designed a lightweight truss bridge structure using structural optimization targeting an exceptional mass-to-load ratio. Validated through physical 3D printing and load performance testing.",
    image: "./assets/projects/truss-bridge.jpg"
  },
  {
    id: 6,
    title: "Hostel Management System",
    tech: "C++ Programming",
    description: "A console-based hostel management application programmed in C++ for handling student records, structural database inputs, and room management protocols.",
    image: "./assets/projects/hostel-db.jpg"
  }
]

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null)

    /* Open Project Details Page mapping */
    if (selectedProject === "f1-helmet") {
        return <F1HelmetProject setSelectedProject={setSelectedProject} />
    }
    if (selectedProject === "robotic-leg") {
        return <RoboticLegProject setSelectedProject={setSelectedProject} />
    }
    if (selectedProject === "hammer") {
        return <HammerProject setSelectedProject={setSelectedProject} />
    }
    if (selectedProject === "v6-engine") {
        return <V6Engine setSelectedProject={setSelectedProject} />
    }
    if (selectedProject === "truss-bridge") {
        return <TrussBridgeProject setSelectedProject={setSelectedProject} />
    }
    if (selectedProject === "hostel-management") {
        return <HostelManagementProject setSelectedProject={setSelectedProject} />
    }

    return (
        <div className="portfolio-container">

            {/* Hero Section */}
            <section className="hero-section" id="home">
                <div className="hero-left">
                    <p className="hero-tag">
                        Air University | Department of Mechanical & Aerospace Engineering
                    </p>
                    <h1>
                        Tayyab Mahmood Adil
                    </h1>
                    <p className="hero-description">
                        Mechanical engineering student specializing in CAD design, 3D surface modeling, and structural optimization. 
                        Operating a professional AutoCAD and engineering services hub with an emphasis on precise technical execution, balancing raw structural efficiency with clean assembly constraints.
                    </p>

                    <div className="hero-buttons">
                        <a
                            href={cvFile}
                            target="_blank"
                            rel="noreferrer"
                            className="primary-btn"
                        >
                            View CV
                        </a>
                        <a
                            href="https://linkedin.com/in/tayyab-mahmood-adil-aaa8a5397"
                            target="_blank"
                            rel="noreferrer"
                            className="secondary-btn"
                        >
                            LinkedIn Profile
                        </a>
                        <a
                            href="https://www.fiverr.com/users/adil_cadncode/"
                            target="_blank"
                            rel="noreferrer"
                            className="fiverr-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                backgroundColor: '#1dbf73',
                                color: '#ffffff',
                                padding: '10px 24px',
                                borderRadius: '4px',
                                fontWeight: '700',
                                marginLeft: '12px',
                                textDecoration: 'none'
                            }}
                        >
                            Hire Me on Fiverr
                        </a>
                    </div>
                </div>

                <div className="hero-right">
                    <img
                        src={profileImage}
                        alt="Tayyab Mahmood Adil"
                    />
                </div>
            </section>

            {/* About & Metrics Section */}
            <section className="about-section" id="about">
                <h2>About Me</h2>
                <p>
                    Mechanical engineering student at Air University specializing in CAD design and 2D/3D modeling, with hands-on experience in 
                    SolidWorks and AutoCAD. My goal is to design everything my mind imagines with a proper engineering approach, balancing structural 
                    efficiency with precise mechanical assembly. Active freelance designer operating under user profile handle @adilcadncode, delivering professional technical schematics globally.
                </p>

                {/* Highly Visual Engineering Stats Metrics */}
                <div className="metrics-display-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0' }}>
                    <div className="metric-box" style={{ padding: '20px', background: '#111', borderRadius: '8px', borderLeft: '4px solid #1dbf73', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: '#1dbf73', margin: '0' }}>3.75</h3>
                        <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.9rem' }}>Current Academic CGPA</p>
                    </div>
                    <div className="metric-box" style={{ padding: '20px', background: '#111', borderRadius: '8px', borderLeft: '4px solid #0077b5', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: '#0077b5', margin: '0' }}>5+</h3>
                        <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.9rem' }}>Core Technical Projects</p>
                    </div>
                    <div className="metric-box" style={{ padding: '20px', background: '#111', borderRadius: '8px', borderLeft: '4px solid #ffffff', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color: '#ffffff', margin: '0' }}>100%</h3>
                        <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.9rem' }}>Design-for-Manufacturing Precision</p>
                    </div>
                </div>

                {/* Quick Info Cards */}
                <div className="about-info-grid">
                    <div className="info-card">
                        <h4>📍 Location</h4>
                        <p>Islamabad, Pakistan</p>
                  {/* Projects Section - Click anywhere on the card to open details */}
            <section className="projects-section" id="projects">
                <h2>Engineering Portfolio & Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div 
                            className="project-card" 
                            key={project.id} 
                            onClick={() => {
                                const projectMap = {
                                    1: "f1-helmet",
                                    2: "robotic-leg",
                                    3: "hammer",
                                    4: "v6-engine",
                                    5: "truss-bridge",
                                    6: "hostel-management"
                                }
                                setSelectedProject(projectMap[project.id])
                            }}
                            style={{ 
                                overflow: 'hidden', 
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {project.image && (
                                <div className="project-img-wrapper" style={{ width: '100%', height: '180px', backgroundColor: '#111' }}>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    />
                                </div>
                            )}
                            <div className="project-card-content" style={{ padding: '20px' }}>
                                <div className="project-top">
                                    <span className="project-tech">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <button className="details-btn" style={{ pointerEvents: 'none' }}>
                                    View Project Blueprints
                                </button>
</div>
    )
}

export default Portfolio
