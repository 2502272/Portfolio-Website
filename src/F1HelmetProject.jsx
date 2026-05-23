
// Detailed F1 Helmet Project Showcase Page

import "./ProjectPage.css"

import frontView from "./assets/Projects/F1 Helment-SolidWorks/F1-Front view.JPG"
import backView from "./assets/Projects/F1 Helment-SolidWorks/F1-Back view.JPG"
import sideView from "./assets/Projects/F1 Helment-SolidWorks/F1-Side view.JPG"
import topView from "./assets/Projects/F1 Helment-SolidWorks/F1-Top view.JPG"
import dualView from "./assets/Projects/F1 Helment-SolidWorks/F1-Dual view.png"
import multiView from "./assets/Projects/F1 Helment-SolidWorks/F1- Multiview.png"
import renderedView from "./assets/Projects/F1 Helment-SolidWorks/F1-Rendered Isolated view.JPG"

function F1HelmetProject({ setSelectedProject }) {

  return (

    <div className="f1-project-page">

      <button
        className="back-btn"
        onClick={() => setSelectedProject(null)}
      >
        ← Back To Portfolio
      </button>

      <div className="f1-project-header">

        <span>
          SolidWorks Project
        </span>

        <h1>
          Formula 1 Helmet Design
        </h1>

        <p>
          A complete Formula 1 helmet designed entirely from scratch using
          SolidWorks, inspired by real-world motorsport engineering,
          aerodynamic principles, and advanced surface modeling techniques.
        </p>

      </div>

      <div className="f1-gallery-grid">

        <img src={frontView} alt="Front View" />
        <img src={backView} alt="Back View" />
        <img src={sideView} alt="Side View" />
        <img src={topView} alt="Top View" />
        <img src={dualView} alt="Dual View" />
        <img src={multiView} alt="Multi View" />
        <img src={renderedView} alt="Rendered View" />

      </div>

      <div className="f1-details-section">

        <h2>
          Project Breakdown
        </h2>

        <div className="detail-card">

          <h3>
            Main Body Surface Design
          </h3>

          <p>
            The project began using only 2D blueprints and evolved into a
            fully modeled F1 helmet. Creating the main helmet body helped in
            understanding advanced surfacing workflows and managing complex
            geometry structures.
          </p>

        </div>

        <div className="detail-card">

          <h3>
            Debossing & Aerodynamic Flow
          </h3>

          <p>
            Debossed surface detailing was applied carefully to reflect
            realistic airflow behavior and motorsport-inspired aerodynamic
            shaping across the helmet shell.
          </p>

        </div>

        <div className="detail-card">

          <h3>
            Visor & Base Gasket
          </h3>

          <p>
            Special attention was given to visor alignment, tolerances,
            visibility, and realistic gasket integration to simulate how
            engineering components interact in practical applications.
          </p>

        </div>

        <div className="detail-card">

          <h3>
            Mouthpiece & Ventilation
          </h3>

          <p>
            The ventilation system and mouthpiece design required ergonomic
            thinking and smooth organic surfacing while maintaining controlled
            airflow through compact spaces.
          </p>

        </div>

        <div className="detail-card">

          <h3>
            Helmet Spoiler & Safety Features
          </h3>

          <p>
            The spoiler was modeled to represent aerodynamic efficiency and
            reduced drag, while the seatbelt mounting area focused on
            motorsport safety integration.
          </p>

        </div>

        <div className="detail-card">

          <h3>
            Rendering & Final Presentation
          </h3>

          <p>
            Materials, textures, and racing-inspired livery were applied to
            achieve a professional presentation and realistic visual output.
          </p>

        </div>

      </div>

      <div className="skills-used">

        <h2>
          Skills Applied
        </h2>

        <div className="skills-grid">

          <span>Advanced Surfacing</span>
          <span>Debossing</span>
          <span>Shelling</span>
          <span>Surface Lofting</span>
          <span>Aerodynamic Form Design</span>
          <span>SolidWorks Modeling</span>

        </div>

      </div>

    </div>

  )

}

export default F1HelmetProject