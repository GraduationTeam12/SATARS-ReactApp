import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <section className='bgContact'>
      <div className="d-flex justify-content-center align-items-center  bgColor p-3">
        <div className="container px-2 px-md-4 px-lg-5 mx-auto" style={{ maxWidth: "900px" }}>
          <div className="row  p-lg-5">
            {/* Left Side - Form */}
            <div className="col-md-6 col-12 p-4 text-white rounded" style={{ background: "rgba(62, 92, 169, 0.4)" }}>
              <h3>Contact Us</h3>
              <h1 className="fw-bold mt-2">Get In Touch</h1>
              <input type="text" className="form-control my-3" placeholder="Your Name" />
              <input type="email" className="form-control my-3" placeholder="E-mail" />
              <textarea className="form-control my-3" placeholder="Message here..." rows="4"></textarea>
              <button className=" btnSubmit fw-bold mt-3 w-50">Submit Now</button>
            </div>

            {/* Right Side - Contact Info */}
            <div className="col-md-6 col-12 bg-white p-4 d-flex align-items-center justify-content-center rounded">
              <h2 className="text-dark text-center">Contact Info</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
