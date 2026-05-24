// Detailed F1 Helmet Project Showcase Page
// Fully optimized with Tayyab's exact design specifications

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
        style={{ cursor: 'pointer' }}
      >
        ← Back To Portfolio
      </button>

      <div className="f1-project-header">
        <span>SolidWorks Advanced Modeling</span>
        <h1>Formula 1 Helmet Design</h1>
        <p>
          Started with nothing but 2D blueprints and designed a complete F1 helmet from scratch 
          as a rigorous technical challenge. This project showcases advanced organic surfacing, precise clearances, 
          and motorsport-inspired aerodynamic shaping.
        </p>
      </div>

      {/* Main Image Gallery Grid */}
      <div className="f1-gallery-grid">
        <img src={frontView} alt="F1 Helmet Front View" />
        <img src={backView} alt="F1 Helmet Back View" />
        <img src={sideView} alt="F1 Helmet Side View" />
        <img src={topView} alt="F1 Helmet Top View" />
        <img src={dualView} alt="F1 Helmet Dual View Perspective" />
        <img src={multiView} alt="F1 Helmet Engineering Multiview Layout" />
        <img src={renderedView} alt="F1 Helmet Rendered Isolated View" />
      </div>

      {/* Project Engineering Breakdown */}
      <div className="f1-details-section">
        <h2>Project Engineering Breakdown</h2>

        <div className="detail-card">
          <h3>Main Body Surface Development</h3>
          <p>
            Getting the main surface right taught me how to handle complex organic geometry and 
            set the baseline path for every intersecting component that came after.
          </p>
        </div>

        <div className="detail-card">
          <h3>Surface Debossing</h3>
          <p>
            Debossed the outer surface precisely to reflect real-world aerodynamic flow profiles. 
            While it sounds simple, managing the curvature transitions matters heavily for fluid flow alignment.
          </p>
        </div>

        <div className="detail-card">
          <h3>Visor & Base Gasket Integration</h3>
          <p>
            Engineered with a strong focus on proper shell mating shape, tight manufacturing tolerances, and clear site lines. 
            Developing the base gasket taught me how distinct physical components seamlessly meet in industrial assemblies.
          </p>
        </div>

        <div className="detail-card">
          <h3>Mouthpiece & Structural Ventilation</h3>
          <p>
            Pushed me to think deeply about human ergonomics, smooth surface lofting shapes, and 
            maintaining unrestrictive, controlled airflow channels within very tight space boundaries.
          </p>
        </div>

        <div className="detail-card">
          <h3>Aerodynamic Helmet Spoiler</h3>
          <p>
            Specifically designed to slice through boundary layer air and minimize trailing drag wake. 
            Pure complex aerodynamic surfacing—and one of the most rewarding pieces of the model.
          </p>
        </div>

        <div className="detail-card">
          <h3>Safety Parameters & Mounts</h3>
          <p>
            Integrated a designated seatbelt mounting anchor setup right into the base structure because 
            driver safety systems always come first in elite motorsport layout rules.
          </p>
        </div>

        <div className="detail-card">
          <h3>Livery Rendering & Presentation</h3>
          <p>
            Applied technical material textures, physical properties, and a custom racing livery to 
            achieve an exceptional high-fidelity engineering presentation.
          </p>
        </div>
      </div>

      {/* Technical Skills Tag Row */}
      <div className="skills-used">
        <h2>Core Competencies Applied</h2>
        <div className="skills-grid">
          <span>Advanced Surfacing</span>
          <span>Debossing & Extrusions</span>
          <span>Shelling Parameters</span>
          <span>Surface Lofting Conic Splines</span>
          <span>Aerodynamic Form Design</span>
          <span>Assembly Tolerancing</span>
        </div>
      </div>

    </div>
  )
}

export default F1HelmetProject
