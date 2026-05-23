// Multifunctional Hammer Project Page

import "./ProjectPage.css"

import multiView from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Multi view.png"
import realWorld from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Real World image.jpg"
import exploded from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Rendered Exploded view.JPG"
import isolated from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Rendered Isolated view.JPG"
import workshop from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Workshop Manufacturing Image.jpg"

function HammerProject({ setSelectedProject }) {

  return (

    <div className="hammer-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => setSelectedProject(null)}
      >
        ← Back To Portfolio
      </button>

      {/* HEADER */}
      <div className="hammer-header">

        <span>SolidWorks + Workshop Project</span>

        <h1>Multifunctional Hammer</h1>

        <p>
          A dual-stage engineering project combining SolidWorks design and real
          workshop fabrication to solve a practical tool limitation problem
          through interchangeable hammer head architecture.
        </p>

      </div>

      {/* IMAGE GALLERY */}
      <div className="hammer-gallery">

        <img src={multiView} alt="Multi View" />
        <img src={realWorld} alt="Real World" />
        <img src={exploded} alt="Exploded View" />
        <img src={isolated} alt="Isolated View" />
        <img src={workshop} alt="Workshop Manufacturing" />

      </div>

      {/* DESIGN SECTION */}
      <div className="hammer-section">

        <h2>SolidWorks Design Phase</h2>

        <div className="detail-card">

          <h3>Handle & Head Modeling</h3>
          <p>
            Designed using boss extrude, threading, and parametric modeling to
            ensure proper fit and mechanical strength between components.
          </p>

        </div>

        <div className="detail-card">

          <h3>Engineering Problem Solving</h3>
          <p>
            The core idea was to eliminate the need for multiple hammers by
            designing interchangeable heads suitable for different materials.
          </p>

        </div>

        <div className="detail-card">

          <h3>Assembly Design</h3>
          <p>
            Threaded interfaces were used to allow secure attachment and removal
            of hammer heads under real mechanical constraints.
          </p>

        </div>

      </div>

      {/* WORKSHOP SECTION */}
      <div className="hammer-section">

        <h2>Workshop Manufacturing</h2>

        <div className="detail-card">

          <h3>Lathe Operations</h3>
          <p>
            PTFE rods were machined using lathe operations including facing,
            turning, taper turning, and threading for precision fit.
          </p>

        </div>

        <div className="detail-card">

          <h3>Drilling & Threading</h3>
          <p>
            Radial drilling and tap & die operations were used to create
            internal and external threads for interchangeable assembly.
          </p>

        </div>

        <div className="detail-card">

          <h3>Material Selection</h3>
          <p>
            PTFE was selected for lightweight handling, while mild steel was
            used for high-impact attachments.
          </p>

        </div>

      </div>

      {/* SKILLS */}
      <div className="hammer-skills">

        <h2>Skills Applied</h2>

        <div className="skills-grid">

          <span>SolidWorks Modeling</span>
          <span>Boss Extrude</span>
          <span>Thread Design</span>
          <span>Lathe Operations</span>
          <span>Tap & Die</span>
          <span>Workshop Manufacturing</span>
          <span>Product Design</span>

        </div>

      </div>

    </div>

  )
}

export default HammerProject