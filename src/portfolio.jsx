// Main Portfolio Website Structure and Layout (ALL IN ONE FILE)

import { useState } from "react"

import profileImage from "./assets/Profile_Photo.jpg"
import cvFile from "./assets/Tayyab_Mahmood_CV.pdf"

import F1HelmetProject from "./F1HelmetProject.jsx"
import RoboticLegProject from "./RoboticLegProject.jsx"
import HammerProject from "./HammerProject.jsx"
import V6Engine from "./V6Engine.jsx"
import TrussBridgeProject from "./TrussBridgeProject.jsx"
import HostelManagementProject from "./HostelManagementProject.jsx"

// Projects Data - Defined directly in this file
const projects = [
  {
    id: 1,
    title: "F1 Helmet Design",
    tech: "SolidWorks",
    description: "A precision-based Formula 1 helmet concept designed with attention to aerodynamics, safety, and realistic engineering proportions.",
  },
  {
    id: 2,
    title: "Robotic Leg Mechanism",
    tech: "SolidWorks",
    description: "A mechanical robotic leg system developed with articulated movement concepts and engineered structural components.",
  },
  {
    id: 3,
    title: "Multifunctional Hammer",
    tech: "SolidWorks + Workshop",
    description: "A practical workshop tool combining multiple functions into a single compact mechanical design with usability-focused engineering.",
  },
  {
    id: 4,
    title: "V6 Engine",
    tech: "AutoCAD",
    description: "A detailed V6 engine model created using AutoCAD with mechanical accuracy and component-based assembly structure.",
  },
  {
    id: 5,
    title: "Truss Bridge",
    tech: "SolidWorks + 3D Printed",
    description: "A structurally optimized truss bridge designed in SolidWorks and physically manufactured using 3D printing techniques.",
  },
  {
    id: 6,
    title: "Hostel Management System",
    tech: "C++",
    description: "A console-based hostel management application programmed in C++ for handling student records and room management.",
  },
]

function Portfolio() {

    const [selectedProject, setSelectedProject] = useState(null)

    /* Open Project Details Page */

    if (selectedProject === "f1-helmet") {
        return (
            <F1HelmetProject
                setSelectedProject={setSelectedProject}
            />
        )
    }
    if (selectedProject === "robotic-leg") {
        return (
            <RoboticLegProject setSelectedProject={setSelectedProject} />
        )
    }
    if (selectedProject === "hammer") {
        return (
            <HammerProject setSelectedProject={setSelectedProject} />
        )
    }
    if (selectedProject === "v6-engine") {
        return (
            <V6Engine setSelectedProject={setSelectedProject} />
        )
    }
    if (selectedProject === "truss-bridge") {
        return (
            <TrussBridgeProject setSelectedProject={setSelectedProject} />
        )
    }
    if (selectedProject === "hostel-management") {
        return (
            <HostelManagementProject setSelectedProject={setSelectedProject} />
        )
    }

    return (

        <div className="portfolio-container">

            {/* Hero Section */}

            <section className="hero-section" id="home">

                <div className="hero-left">

                    <p className="hero-tag">
                        Mechanical Engineering Student
                    </p>

                    <h1>
                        Tayyab Mahmood Adil
                    </h1>

                    <p className="hero-description">
                        Passionate mechanical engineering student specializing in CAD
                        design, 2D/3D modeling, and engineering-focused problem solving.
                        Experienced with SolidWorks and AutoCAD, with a strong interest in
                        transforming innovative ideas into practical and professional
                        mechanical designs.
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
                            href={cvFile}
                            download
                            className="secondary-btn"
                        >
                            Download CV
                        </a>

                    </div>

                </div>

                <div className="hero-right">

                    <img
                        src={profileImage}
                        alt="Tayyab Mehmood Adil"
                    />

                </div>

            </section>

            {/* About Section */}

            <section className="about-section" id="about">

                <h2>About Me</h2>

                <p>
                    Mechanical engineering student specializing in CAD design and 2D/3D modeling, with hands-on experience in 
                    SolidWorks and AutoCAD. My goal is to design everything my mind imagines with a proper engineering approach. 
                    I am currently looking for new opportunities in CAD design and freelance work. If you are looking for someone 
                    who approaches every project with responsibility and dedication, let's connect!
                </p>

                {/* Quick Info Cards */}
                <div className="about-info-grid">
                    <div className="info-card">
                        <h4>📍 Location</h4>
                        <p>Islamabad, Pakistan</p>
                    </div>
                    <div className="info-card">
                        <h4>📧 Email</h4>
                        <p>t1412530@gmail.com</p>
                    </div>
                    <div className="info-card">
                        <h4>📞 Phone</h4>
                        <p>0336 5815973</p>
                    </div>
                </div>

                {/* Qualification Section */}
                <div className="about-subsection">
                    <h3>🎓 Qualification</h3>
                    
                    <div className="qualification-item">
                        <h4>Air University, Islamabad</h4>
                        <p className="degree">Bachelor of Mechanical Engineering</p>
                        <p className="result">CGPA: 3.75 (Current)</p>
                    </div>

                    <div className="qualification-item">
                        <h4>Army Public Schools & Colleges, Sarai Alamgir</h4>
                        <p className="degree">FSC (Pre-Engineering)</p>
                        <p className="result">Result: 87.1%</p>
                    </div>

                    <div className="qualification-item">
                        <h4>Saint Francis Schools & Colleges, Sarai Alamgir</h4>
                        <p className="degree">Matriculation (Science)</p>
                        <p className="result">Result: 88%</p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="about-subsection">
                    <h3>💻 Skills</h3>
                    
                    <div className="skills-category">
                        <h4>CAD Software</h4>
                        <div className="skills-tags">
                            <span>SolidWorks (Intermediate)</span>
                            <span>AutoCAD 2D/3D (Intermediate)</span>
                            <span>CAD Rendering</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Programming</h4>
                        <div className="skills-tags">
                            <span>C++ (Intermediate)</span>
                        </div>
                    </div>

                    <div className="skills-category">
                        <h4>Tools & Other</h4>
                        <div className="skills-tags">
                            <span>Microsoft Office</span>
                            <span>Workshop Machining</span>
                            <span>3D Printing</span>
                        </div>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="about-subsection">
                    <h3>🌐 Languages</h3>
                    
                    <div className="languages-grid">
                        <div className="language-item">
                            <h4>English</h4>
                            <p>C1 - Advanced Academic Proficiency</p>
                        </div>
                        <div className="language-item">
                            <h4>German</h4>
                            <p>A-1 (In Progress)</p>
                        </div>
                        <div className="language-item">
                            <h4>Urdu</h4>
                            <p>Native</p>
                        </div>
                        <div className="language-item">
                            <h4>Punjabi</h4>
                            <p>Mother Tongue</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Projects Section */}

            <section className="projects-section" id="projects">

                <h2>Projects</h2>

                <div className="projects-grid">

                    {projects.map((project) => (

                        <div className="project-card" key={project.id}>

                            <div className="project-top">

                                <span className="project-tech">
                                    {project.tech}
                                </span>

                            </div>

                            <h3>
                                {project.title}
                            </h3>

                            <p>
                                {project.description}
                            </p>

                            <button
                                className="details-btn"

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
                            >
                                View Details
                            </button>

                        </div>

                    ))}

                </div>

            </section>

        </div>

    )

}

export default Portfolio