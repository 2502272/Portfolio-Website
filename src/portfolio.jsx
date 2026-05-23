// Main Portfolio Website Structure and Layout

import { useState } from "react"

import projects from "./portfolio.js"

import profileImage from "./assets/Profile_Photo.jpg"
import cvFile from "./assets/Tayyab_Mahmood_CV.pdf"

import F1HelmetProject from "./F1HelmetProject.jsx"
import RoboticLegProject from "./RoboticLegProject.jsx"
import HammerProject from "./HammerProject.jsx"
import V6Engine from "./V6Engine.jsx"
import TrussBridgeProject from "./TrussBridgeProject.jsx"
import HostelManagementProject from "./HostelManagementProject.jsx"

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
                    I focus on creating innovative and technically accurate engineering
                    designs with a strong understanding of CAD tools and mechanical
                    systems. My work combines creativity, functionality, and engineering
                    precision to develop practical solutions and professional-grade
                    models.
                </p>

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

                                    if (project.id === 1) {
                                        setSelectedProject("f1-helmet")
                                    }

                                    if (project.id === 2) {
                                        setSelectedProject("robotic-leg")
                                    }

                                    if (project.id === 3) {
                                        setSelectedProject("hammer")
                                    }

                                    if (project.id === 4) {
                                        setSelectedProject("v6-engine")
                                    }
                                    if (project.id === 5) {
                                        setSelectedProject("truss-bridge")
                                    }
                                    if (project.id === 6) {
                                        setSelectedProject("hostel-management")
                                    }

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