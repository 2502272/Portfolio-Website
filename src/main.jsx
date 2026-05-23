// Main React Application Entry Point with Routing

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

import Header from './header.jsx'
import Portfolio from './portfolio.jsx'
import Contact from './contact.jsx'
import Footer from './footer.jsx'

import './portfolio.css'
import './header.css'
import './footer.css'
import './ProjectPage.css'  // Universal CSS for all project pages
import './contact.css'       // Contact page CSS

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