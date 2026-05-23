// Truss Bridge SolidWorks + 3D Printed Project Page

import "./ProjectPage.css"

import multiView from "./assets/Projects/5). Truss Bridge-SolidWorks + 3D printed/Truss Bridge-Multi view.png"
import realWorldView from "./assets/Projects/5). Truss Bridge-SolidWorks + 3D printed/Truss Bridge-Real World view.png"
import sideView from "./assets/Projects/5). Truss Bridge-SolidWorks + 3D printed/Truss Bridge-Side view.JPG"
import trimetricView from "./assets/Projects/5). Truss Bridge-SolidWorks + 3D printed/Truss Bridge-Trimetric view.JPG"

function TrussBridgeProject({ setSelectedProject }) {

  return (

    <div className="bridge-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => setSelectedProject(null)}
      >
        ← Back To Portfolio
      </button>

      {/* HEADER */}
      <div className="bridge-header">

        <span>SolidWorks + 3D Printing Project</span>

        <h1>Baltimore Truss Bridge</h1>

        <p>
          A structurally optimized Baltimore Truss Bridge designed in SolidWorks 
          using Weldments, achieving a 100 kg load capacity with minimal weight. 
          The design focuses on maximum strength-to-weight ratio through strategic 
          truss topology and member optimization.
        </p>

      </div>

      {/* IMAGE GALLERY */}
      <div className="bridge-gallery">

        <img src={multiView} alt="Multi View - Baltimore Truss Bridge" />
        <img src={realWorldView} alt="Real World View - 3D Printed Bridge" />
        <img src={sideView} alt="Side View - Truss Structure" />
        <img src={trimetricView} alt="Trimetric View - Complete Assembly" />

      </div>

      {/* DESIGN PHASE SECTION */}
      <div className="bridge-section">

        <h2>SolidWorks Weldments Design</h2>

        <div className="bridge-card">

          <h3>Structural Planning & Symmetry</h3>
          <p>
            The bridge design began by sketching one side of the Baltimore Truss on the 
            Front Plane, then mirroring it to form the complete symmetrical structure. 
            This approach ensured perfect geometric balance and efficient material distribution.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Chord Construction</h3>
          <p>
            The Top Plane was used to construct the upper chord, which was then mirrored 
            to complete the lower chord and lateral sides. This multi-plane sketching 
            technique created a robust framework for the entire bridge prototype.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Weldment Members & Trim Features</h3>
          <p>
            Structural members were applied using SolidWorks Weldments with Trim features 
            across multiple planes. The Baltimore Truss topology incorporates subdivided 
            lower panels with secondary vertical and inclined members to prevent lateral 
            buckling under compressive loads.
          </p>

        </div>

      </div>

      {/* ENGINEERING ANALYSIS SECTION */}
      <div className="bridge-section">

        <h2>Structural Performance</h2>

        <div className="bridge-card">

          <h3>Load Capacity Testing</h3>
          <p>
            The final bridge model successfully withstands up to 100 kg without failure, 
            demonstrating exceptional structural integrity. The Baltimore Truss configuration 
            was selected for its highly favorable strength-to-weight ratio and efficient 
            distribution of compressive and tensile forces among members.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Weight Optimization</h3>
          <p>
            By utilizing the Weldments feature throughout the entire bridge construction, 
            the design achieved minimum weight while maintaining maximum load-bearing 
            capacity. The panel sub-division reduces the effective unsupported length of 
            critical web members, minimizing Euler buckling risk under compression.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Bridge Specifications</h3>
          <p>
            The bridge spans 297.18 mm along its longitudinal axis with a clear deck width 
            of 50 mm and total structural depth of 57.5 mm. The span-to-depth ratio of 
            approximately 5.17:1 ensures adequate stiffness against mid-span deflection 
            under loading conditions.
          </p>

        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="bridge-skills">

        <h2>Skills Applied</h2>

        <div className="skills-grid">

          <span>SolidWorks Weldments</span>
          <span>Structural Member Profiles</span>
          <span>Mirroring Techniques</span>
          <span>Multi-Plane Sketching</span>
          <span>Trim Features</span>
          <span>Baltimore Truss Topology</span>
          <span>Strength-to-Weight Optimization</span>
          <span>Structural Design</span>

        </div>

      </div>

    </div>

  )
}

export default TrussBridgeProject