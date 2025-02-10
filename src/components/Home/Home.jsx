import React from 'react';

import './Home.css';
export default function Home() {
  return <>
  <section className='pgHome '>
  <div className="container">
      <div className="row align-items-center py-5">
       
        <div className="col-lg-6 text-content">
          <h1 className="fw-normal">Smart accident tracking and rescue system</h1>
          <p className="text-muted py-3 fontSize">
            Utilizing AI and IoT, this system detects accidents in real-time, locates them accurately, and alerts rescue
            teams instantly, ensuring faster response and improved road safety.
          </p>
          <button className="btn request-btn">Request Invite</button>
        </div>

     
        <div className="col-lg-6 d-flex justify-content-end">
          <img src="./img/homeImg (2).svg" alt="SATARS Mobile App" className="phone-img img-fluid" />
        </div>
      </div>
    </div>

  </section>
  </>
  
}
