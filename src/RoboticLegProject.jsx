// Robotic Leg Mechanism Detailed Project Page

import "./ProjectPage.css"

import video from "./assets/Projects/Robotic Leg Mechanism-SolidWorks/Robo Leg Video.mp4"

import dualView from "./assets/Projects/Robotic Leg Mechanism-SolidWorks/Robo Leg-Dual view.png"
import isolatedView from "./assets/Projects/Robotic Leg Mechanism-SolidWorks/Robo Leg-Isolated view.png"

function RoboticLegProject({ setSelectedProject }) {

  return (

    <div className="robotic-page">

      <button
        className="back-btn"
        onClick={() => setSelectedProject(null)}
      >
        ← Back To Portfolio
      </button>

      <div className="robotic-header">

        <span>SolidWorks Project</span>

        <h1>Robotic Leg Mechanism</h1>

        <p>
          A fully articulated robotic leg system designed in SolidWorks using
          a crank-driven linkage mechanism, simulating realistic human-like motion
          through engineered joints and assembly constraints.
        </p>

      </div>

      {/* VIDEO SECTION */}

      <div className="video-section">

        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          controls
        />

      </div>

      {/* IMAGES */}

      <div className="robotic-gallery">

        <img src={dualView} alt="Dual View" />
        <img src={isolatedView} alt="Isolated View" />

      </div>

      {/* DESCRIPTION */}

      <div className="robotic-details">

        <div className="detail-card">

          <h3>Mates & Constraints</h3>
          <p>
            Used coincident, concentric, and hinge mates to assemble individual
            components into a fully functional mechanical motion system.
          </p>

        </div>

        <div className="detail-card">

          <h3>Motion Study Simulation</h3>
          <p>
            Performed multiple motion studies to validate movement accuracy and
            ensure proper kinematic behavior of all joints.
          </p>

        </div>

        <div className="detail-card">

          <h3>Assembly Design</h3>
          <p>
            Managed multiple sub-assemblies and configurations to maintain
            structural clarity and simulation accuracy throughout the design.
          </p>

        </div>

        <div className="detail-card">

          <h3>Rendering & Presentation</h3>
          <p>
            Applied realistic materials and rendering techniques to achieve a
            professional engineering visualization output.
          </p>

        </div>

      </div>

      <div className="skills">

        <h2>Skills Applied</h2>

        <div className="skills-grid">

          <span>3D Modeling</span>
          <span>Assembly Mates</span>
          <span>Kinematics</span>
          <span>Motion Study</span>
          <span>Interference Detection</span>
          <span>SolidWorks Simulation</span>

        </div>

      </div>

    </div>

  )
}

export default RoboticLegProject