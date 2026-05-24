// Detailed Multifunctional Hammer Project Showcase Page
// Structured perfectly matching template style with live report button integration

import "./ProjectPage.css"

import multiView from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Multi view.png"
import realWorld from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Real World image.jpg"
import exploded from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Rendered Exploded view.JPG"
import isolated from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Rendered Isolated view.JPG"
import workshop from "./assets/Projects/Multifunctional Hammer-SolidWorks and Workshop/Multifunctional Hammer-Workshop Manufacturing Image.jpg"
import projectReport from "./assets/Hammer_Project_Report.pdf"

function HammerProject({ setSelectedProject }) {

  return (
    <div className="hammer-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => setSelectedProject(null)}
        style={{ cursor: 'pointer' }}
      >
        ← Back To Portfolio
      </button>

      {/* HEADER */}
      <div className="hammer-header">
        <span>SolidWorks + Workshop Project</span>
        <h1>Multifunctional Hammer</h1>
        <p>
          A major problem faced in the workshop as an Engineering Student was the need for multiple tools. 
          From heavy-duty applications to sensitive tasks like working with marble, different hammers are required. 
          To solve this, I designed a Multifunctional Hammer featuring interchangeable heads to avoid costly production mistakes.
        </p>

        {/* VIEW REPORT BUTTON */}
        <div style={{ marginTop: '20px' }}>
          <a 
            href={projectReport} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-report-btn"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#007bff',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            📋 View Full Project Report (PDF)
          </a>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="hammer-gallery">
        <img src={multiView} alt="Multi View" />
        <img src={realWorld} alt="Real World Product" />
        <img src={exploded} alt="Exploded View" />
        <img src={isolated} alt="Isolated View" />
        <img src={workshop} alt="Workshop Manufacturing" />
      </div>

      {/* DESIGN SECTION */}
      <div className="hammer-section">
        <h2>SolidWorks Modeling Phase</h2>

        <div className="detail-card">
          <h3>Handle Design</h3>
          <p>
            Modeled using Boss Extrude and precision external metric thread features to establish 
            the core structural foundation of the tool handle assembly.
          </p>
        </div>

        <div className="detail-card">
          <h3>Head Customization</h3>
          <p>
            Designed with integrated boss extrudes, internal threading configurations, and mounting holes 
            to allow for stable interchangeable swapping constraints.
          </p>
        </div>

        <div className="detail-card">
          <h3>Modular Attachments</h3>
          <p>
            Developed matching threaded components to seamlessly interface with the main head housing 
            under real physical mechanical assembly limits.
          </p>
        </div>
      </div>

      {/* WORKSHOP SECTION */}
      <div className="hammer-section">
        <h2>Workshop Manufacturing</h2>

        <div className="detail-card">
          <h3>Handle Execution</h3>
          <p>
            Machined raw stock on the manual lathe setup and processed clean threads using specialized 
            Metric Die tools to match design metrics perfectly.
          </p>
        </div>

        <div className="detail-card">
          <h3>Head Machining</h3>
          <p>
            Utilized standard lathe operations, radial drilling machinery, and manual Metric Taps to finish 
            the secure internal structural connection configurations.
          </p>
        </div>

        <div className="detail-card">
          <h3>Interchangeable Attachments</h3>
          <p>
            Turned distinct face profiles on the lathe and custom-threaded the attachment elements using metric dies 
            to create soft striking options (PTFE) and high-impact configurations (Mild Steel).
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
          <span>Lathe Operation</span>
          <span>Radial Drilling</span>
          <span>Tap & Die Threading</span>
          <span>Product Design</span>
        </div>
      </div>

    </div>
  )
}

export default HammerProject
