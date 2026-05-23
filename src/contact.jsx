// Contact Page with Working Email Form (Web3Forms Integration)

import "./contact.css"
import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: ""
    })

    try {
      // Create FormData object
      const formDataToSend = new FormData()
      formDataToSend.append("access_key", "6987a930-16d2-4a06-aaea-c4ad506676ab")
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("subject", formData.subject)
      formDataToSend.append("message", formData.message)
      
      // Optional: Add redirect URL (optional)
      // formDataToSend.append("redirect", "https://yourwebsite.com/thank-you")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: "✅ Message sent successfully! I'll get back to you soon."
        })
        
        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false, message: "" }))
        }, 5000)
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "❌ Failed to send message. Please email me directly at t1412530@gmail.com"
      })
    }
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (

    <div className="contact-page">

      {/* Back Button */}
      <button className="contact-back-btn" onClick={handleGoBack}>
        ← Back to Portfolio
      </button>

      <div className="contact-container">

        {/* Left Side - Contact Info */}
        <div className="contact-info">

          <div className="contact-header">
            <span className="contact-tag">Get In Touch</span>
            <h1>Let's Connect</h1>
            <p>
              Have a project in mind or just want to say hello? I'm always excited 
              to discuss new opportunities, collaborations, or engineering challenges.
            </p>
          </div>

          <div className="contact-details-card">

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 7L12 14L2 7" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-detail-content">
                <h3>Email</h3>
                <a href="mailto:t1412530@gmail.com">t1412530@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19C22.0001 19.3956 21.9027 19.7847 21.7166 20.1293C21.5306 20.4739 21.2621 20.762 20.9374 20.966C20.6128 21.1701 20.243 21.284 19.8624 21.2978C19.4818 21.3115 19.105 21.2246 18.767 21.045C15.7071 19.4936 13.0399 17.2832 10.939 14.56C9.20926 12.3613 7.94341 9.83501 7.223 7.135C7.08755 6.70598 7.05986 6.25016 7.14217 5.80746C7.22448 5.36476 7.41447 4.95046 7.693 4.605C8.08199 4.17147 8.58839 3.85894 9.1492 3.70587C9.71001 3.5528 10.3015 3.5654 10.855 3.742L13.227 4.51C13.6539 4.66647 14.0207 4.95198 14.2698 5.32484C14.5189 5.6977 14.6365 6.13786 14.605 6.58L14.277 10.835C14.2542 11.1556 14.1354 11.4607 13.937 11.709C13.7386 11.9574 13.4712 12.1365 13.17 12.221L11.23 12.721C12.0009 14.5095 13.1717 16.1059 14.65 17.386L16.38 16.344C16.6135 16.1985 16.8824 16.1155 17.1596 16.1032C17.4368 16.0909 17.7125 16.1497 17.959 16.274L20.077 17.337C20.4606 17.5262 20.7712 17.8342 20.9627 18.2176C21.1542 18.6009 21.2144 19.0386 21.134 19.459L20.807 21.029C20.7444 21.3603 20.5878 21.6665 20.3563 21.9124C20.1249 22.1583 19.8285 22.3334 19.501 22.416C19.2494 22.4795 18.9897 22.507 18.729 22.498C16.5119 22.394 14.3628 21.7899 12.436 20.744C10.6771 19.7898 9.12651 18.5195 7.868 16.998C6.32432 15.1295 5.16099 12.9688 4.447 10.635C3.91787 8.88358 3.66246 7.05928 3.688 5.227C3.69368 4.81438 3.82621 4.41362 4.06469 4.08378C4.30317 3.75393 4.63566 3.51225 5.018 3.393L6.689 2.873C7.14034 2.72184 7.62421 2.71255 8.0802 2.84624C8.53618 2.97993 8.94115 3.25048 9.239 3.62L11.007 5.773C11.2584 6.08486 11.4229 6.46263 11.482 6.8642C11.5412 7.26577 11.4929 7.67613 11.342 8.05L10.549 10.062" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-detail-content">
                <h3>Phone</h3>
                <a href="tel:+923365815973">0336 5815973</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="1" fill="#60a5fa" stroke="#60a5fa" strokeWidth="2"/>
                </svg>
              </div>
              <div className="contact-detail-content">
                <h3>Location</h3>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>

          </div>

          <div className="social-links">

            <h3>Connect Online</h3>

            <div className="social-icons">

              <a 
                href="https://www.linkedin.com/in/tayyab-mahmood-adil-aaa8a5397/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9YthyNbNSeitxA5pNusO9w%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5C3 4.44772 3.44772 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 8V8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 16V13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a 
                href="https://github.com/2502272" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M15 22V18.13C15.0375 17.6531 14.9731 17.1738 14.811 16.7238C14.6489 16.2738 14.3929 15.8634 14.06 15.52C17.2 15.17 20.5 13.98 20.5 8.52C20.4997 7.12383 19.9627 5.7812 19 4.77C19.4559 3.54851 19.4236 2.19835 18.91 0.999999C18.91 0.999999 17.73 0.649999 15 2.48C12.708 1.85882 10.292 1.85882 8 2.48C5.27 0.649999 4.09 0.999999 4.09 0.999999C3.57638 2.19835 3.54414 3.54851 4 4.77C3.03013 5.7887 2.49252 7.1434 2.5 8.55C2.5 13.97 5.8 15.16 8.94 15.55C8.611 15.89 8.35726 16.2954 8.19531 16.7399C8.03335 17.1844 7.96681 17.6581 8 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>GitHub</span>
              </a>

            </div>

          </div>

        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-wrapper">

          <div className="contact-form-container">

            <h2>Send a Message</h2>

            <p className="form-description">
              Fill out the form below and I'll receive your message directly to my email.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {formStatus.success && (
                <div className="form-success">
                  {formStatus.message}
                </div>
              )}

              {formStatus.error && (
                <div className="form-error">
                  {formStatus.message}
                </div>
              )}

            </form>

            <div className="form-note">
              <p>
                ✅ Your message will be sent directly to <strong>t1412530@gmail.com</strong>
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Contact