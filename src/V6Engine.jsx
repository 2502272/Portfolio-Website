// V6 Engine AutoCAD Project Page

import "./ProjectPage.css"

import layout from "./assets/Projects/V6 Engine-AutoCAD/V6 Engine-Layout.jpg"
import multi from "./assets/Projects/V6 Engine-AutoCAD/V6 Engine-Solid Modelling Multi view.jpg"
import iso from "./assets/Projects/V6 Engine-AutoCAD/V6 Engine-Isolated view.jpg"
import internal from "./assets/Projects/V6 Engine-AutoCAD/V6 Engine-Internal Assembly.jpg"

function V6Engine({ setSelectedProject }) {

  return (

    <div className="v6-page">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => setSelectedProject(null)}>
        ← Back To Portfolio
      </button>

      {/* HEADER */}
      <div className="v6-header">

        <span>AutoCAD 3D Digital Twin Project</span>

        <h1>V6 Engine (V-Line Configuration)</h1>

        <p>
          A fully modeled six-cylinder V-line internal combustion engine designed
          in AutoCAD 3D focusing on mechanical realism, assembly precision,
          and advanced surface modeling techniques.
        </p>

      </div>

      {/* IMAGE GRID */}
      <div className="v6-gallery">

        <img src={layout} alt="Engine Layout" />
        <img src={multi} alt="Multi View" />
        <img src={iso} alt="Isolated View" />
        <img src={internal} alt="Internal Assembly" />

      </div>

      {/* ENGINEERING SECTION */}
      <div className="v6-section">

        <h2>Design & Modeling Approach</h2>

        <div className="v6-card">

          <h3>V-Line Architecture</h3>
          <p>
            Engine was designed using a 60° V configuration to achieve balance
            between compact structure and smooth mechanical performance.
          </p>

        </div>

        <div className="v6-card">

          <h3>Surface & Solid Modeling</h3>
          <p>
            LOFT, SWEEP, and EXTRUDE commands were used to construct intake
            systems, cylinder banks, and complex engine geometries.
          </p>

        </div>

        <div className="v6-card">

          <h3>Crankshaft & Motion System</h3>
          <p>
            Designed with precise angular offsets to ensure synchronized piston
            movement and correct firing order simulation.
          </p>

        </div>

      </div>

      {/* ASSEMBLY SECTION */}
      <div className="v6-section">

        <h2>Assembly & Engineering Precision</h2>

        <div className="v6-card">

          <h3>UCS Alignment</h3>
          <p>
            User Coordinate System was heavily used to align pistons inside
            angled cylinder banks with strict geometric accuracy.
          </p>

        </div>

        <div className="v6-card">

          <h3>Boolean Operations</h3>
          <p>
            Subtract and Union operations were used to create coolant passages,
            bores, and internal cavities inside the engine block.
          </p>

        </div>

        <div className="v6-card">

          <h3>Interference Checking</h3>
          <p>
            All moving components were tested for collision-free motion ensuring
            realistic mechanical assembly behavior.
          </p>

        </div>

      </div>

      {/* SKILLS */}
      <div className="v6-skills">

        <h2>Skills Applied</h2>

        <div className="skills-grid">

          <span>AutoCAD 3D Modeling</span>
          <span>LOFT & SWEEP</span>
          <span>Boolean Logic</span>
          <span>UCS Manipulation</span>
          <span>Assembly Design</span>
          <span>Interference Detection</span>
          <span>Mechanical Simulation</span>

        </div>

      </div>

    </div>

  )
}

export default V6Engine