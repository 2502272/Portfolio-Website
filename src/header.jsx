// Professional Responsive Portfolio Header with Active Scroll Navigation

import "./Header.css"
import { useEffect, useState } from "react"

function Header() {

  const [activeSection, setActiveSection] = useState("home")

  // Check if we're on the contact page
  const isContactPage = window.location.hash === "#/contact" || 
                        window.location.pathname.includes("/contact")

  useEffect(() => {

    const handleScroll = () => {

      const sections = ["home", "about", "projects"]

      const scrollPosition = window.scrollY + 200

      sections.forEach((sectionId) => {

        const section = document.getElementById(sectionId)

        if (section) {

          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId)
          }

        }

      })

    }

    if (!isContactPage) {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [isContactPage])

  const handleContactClick = (e) => {
    e.preventDefault()
    window.location.hash = "#/contact"
    window.scrollTo(0, 0)
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    if (isContactPage) {
      window.location.hash = "#/"
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (

    <header className="header">

      <div className="header-logo">
        <a href="#/" style={{ textDecoration: "none", color: "white" }}>
          Tayyab.
        </a>
      </div>

      <nav className="navbar">

        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={!isContactPage && activeSection === "home" ? "active-link" : ""}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className={!isContactPage && activeSection === "about" ? "active-link" : ""}
        >
          About
        </a>

        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className={!isContactPage && activeSection === "projects" ? "active-link" : ""}
        >
          Projects
        </a>

        <a
          href="/#contact"
          onClick={handleContactClick}
          className={isContactPage ? "active-link" : ""}
        >
          Contact
        </a>

      </nav>

    </header>

  )

}

export default Header