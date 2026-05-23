// Hostel Management System - C++ Console Application Project Page

import "./ProjectPage.css"

import projectVideo from "./assets/Projects/6). Hostel Management System-C++/Hostel Management System-Video.mp4"

function HostelManagementProject({ setSelectedProject }) {

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

        <span>C++ Console Application | GitHub Project</span>

        <h1>Hostel Management System</h1>

        <p>
          A fully functional C++ console application that helps students find and book hostels 
          while giving hostel owners a simple way to manage records. Built with dynamic pricing, 
          automated billing, and real-time cost estimation — solving real-world accommodation 
          challenges for out-of-city students.
        </p>

      </div>

      {/* VIDEO DEMO SECTION */}
      <div className="video-section">

        <video
          src={projectVideo}
          autoPlay
          muted
          loop
          playsInline
          controls
        />

      </div>

      {/* PROJECT OVERVIEW SECTION */}
      <div className="bridge-section">

        <h2>Project Overview</h2>

        <div className="bridge-card">

          <h3>Real-World Problem Solving</h3>
          <p>
            As a student from another city, finding suitable hostel accommodation was never 
            straightforward. This problem became the foundation of this project — a console 
            application that digitizes and automates the entire hostel search and booking process, 
            eliminating the need for physical visits and manual calculations.
          </p>

        </div>

        <div className="bridge-card">

          <h3>System Architecture</h3>
          <p>
            The program maintains separate databases for boys' and girls' hostels using custom 
            structs and arrays, keeping records organized without any external dependencies. 
            The modular code structure allows easy scalability — new cities or hostels can be 
            added by simply calling the addHostel function.
          </p>

        </div>

      </div>

      {/* TECHNICAL FEATURES SECTION */}
      <div className="bridge-section">

        <h2>Technical Implementation</h2>

        <div className="bridge-card">

          <h3>Dynamic Pricing Engine</h3>
          <p>
            Built a real-time algorithm that calculates total fees based on room capacity 
            (1, 2, 3, or 4-seater), optional amenities such as Mess and Attached Washroom, 
            and luxury charges for prime location tiers. The formula follows: 
            Total = Room Price + Washroom Cost + Mess Cost + Luxury Charge.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Data Structuring & Management</h3>
          <p>
            Used custom structs and arrays to manage separate databases for different hostel 
            blocks. Each hostel entry encapsulates Name, Address, Contact, and Location Rating, 
            with luxury charge logic allowing real-world pricing variance based on sector 
            locations (e.g., F-8 premium sector vs. remote areas).
          </p>

        </div>

        <div className="bridge-card">

          <h3>Input Validation & Error Handling</h3>
          <p>
            Implemented strict type-checking to handle edge cases such as preventing runtime 
            errors when non-numeric characters are entered. The system reads inputs as strings 
            first, then converts or compares them, ensuring robust crash-proof operation even 
            with invalid user input.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Automated Billing System</h3>
          <p>
            Developed a logic engine that generates instant, detailed billing breakdowns — 
            replacing manual calculation entirely. Users receive a clear formatted receipt 
            showing room charges, amenity costs, luxury surcharges, and the final monthly total.
          </p>

        </div>

      </div>

      {/* WORKFLOW SECTION */}
      <div className="bridge-section">

        <h2>User Workflow</h2>

        <div className="bridge-card">

          <h3>Step-by-Step Process</h3>
          <p>
            <strong>1. Gender Selection:</strong> User chooses between Boys/Girls hostels.<br />
            <strong>2. Hostel Selection:</strong> User selects a specific hostel from the filtered list.<br />
            <strong>3. Room Customization:</strong> User selects room type (1-4 seater) — prices 
            decrease as capacity increases.<br />
            <strong>4. Add-on Toggles:</strong> User chooses optional amenities (Mess and Attached Washroom) 
            using y/n inputs.<br />
            <strong>5. Instant Receipt Generation:</strong> System calculates and displays the final 
            estimated monthly rent with full breakdown.
          </p>

        </div>

        <div className="bridge-card">

          <h3>Continuous Operation</h3>
          <p>
            The program runs inside a while loop, keeping the application active until the user 
            specifically chooses to "Exit." This prevents the console from closing after just one 
            action, allowing multiple searches and comparisons in a single session.
          </p>

        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="bridge-skills">

        <h2>Skills Applied</h2>

        <div className="skills-grid">

          <span>C++ Programming</span>
          <span>Data Structures (Structs & Arrays)</span>
          <span>Conditional Logic</span>
          <span>Input Validation</span>
          <span>Software Architecture</span>
          <span>Algorithm Design</span>
          <span>Dynamic Pricing Engine</span>
          <span>Automated Billing Logic</span>
          <span>Console Application Development</span>

        </div>

      </div>

      {/* GITHUB SECTION */}
      <div className="bridge-section" style={{ marginTop: "60px" }}>

        <div className="bridge-card" style={{ textAlign: "center" }}>

          <h3>GitHub Repository</h3>
          <p>
            This project is open-source and available on GitHub. Visit the repository to explore 
            the complete source code, documentation, and implementation details.
          </p>

          <a 
            href="https://github.com/2502272/HOSTEL-REQUIREMENT-SYSTEM-CPP"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "12px 28px",
              background: "linear-gradient(135deg, #3b82f6, #2563eb)",
              color: "white",
              textDecoration: "none",
              borderRadius: "12px",
              fontWeight: "600",
              transition: "0.35s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 10px 25px rgba(59, 130, 246, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View on GitHub →
          </a>

        </div>

      </div>

    </div>

  )
}

export default HostelManagementProject