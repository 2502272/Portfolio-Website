// Main React Application Entry Point with Routing

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Header.jsx'
import Portfolio from './portfolio.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

import './portfolio.css'
import './Header.css'
import './Footer.css'
import './ProjectPage.css'  // Universal CSS for all project pages
import './Contact.css'       // Contact page CSS

function App() {

  const [currentPage, setCurrentPage] = useState("portfolio")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#/contact") {
        setCurrentPage("contact")
        window.scrollTo(0, 0)
      } else {
        setCurrentPage("portfolio")
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Cleanup
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <>
      <Header />
      {currentPage === "portfolio" ? <Portfolio /> : <Contact />}
      <Footer />
    </>
  )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)