import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaTiktok, FaFacebookF } from "react-icons/fa6";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer bg">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Social Icons */}
          <div className="footer-brand">
            <div>
            <img src="/logo.svg" alt="SATARS Logo" className="footer-logo" />
            <span className="brand-name">SATARS</span>
            </div>
            
            <div className="social-icons ps-5">
              <FaXTwitter />
              <FaTiktok />
              <FaFacebookF />
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>

          {/* Button & Copyright */}
          <div className="footer-actions">
            <Link to="/request-invite" className="request-invite-btn">
              Request Invite
            </Link>
            <p className="copyright">Copy right @ SATARS2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
