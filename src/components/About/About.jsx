import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
    <section className="about-section ">
      <div className="container overflow-hidden">
        <div className="row d-flex align-items-center">
         
          <div className="col-md-7">
            <h2 className="fs-30 py-3">Why choose SATARS?</h2>
            <p className="text-muted fs-25">
              A smart accident tracking and rescue app improves safety by providing instant alerts 
              to emergency services, ensuring quick action during critical moments. With real-time 
              location tracking, it ensures help arrives faster, potentially saving lives.
            </p>
            <p className="text-muted fs-25">
              This app also offers peace of mind by notifying loved ones in case of an emergency, 
              keeping them updated and reducing uncertainty. It can also track vital information for 
              insurance purposes, streamlining the claims process and reducing hassles.
            </p>
          </div>

          <div className="col-md-5 text-center text-md-end ">
  <img src="./img/AboutImg.svg" alt="SATARS App" className="img-fluid AboutImg" />
</div>

        </div>

      
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
              <h6 className="fw-normal  fs-15">{feature.title}</h6>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const features = [
  { icon: 'iconsAbout/Group 357.png', title: 'Prevention Features', description: 'It sends an alert to emergency services as soon as an accident occurs, ensuring quick response times.' },
  { icon: 'iconsAbout/Group 358.png', title: 'Location Tracking', description: 'The app accurately pinpoints the accident location, helping rescuers reach the scene more quickly.' },
  { icon: 'iconsAbout/Group 359.png', title: 'Automatic Accident Detection', description: 'It uses sensors to detect accidents automatically and send distress signals without the user needing to manually call for help.' },
  { icon: 'iconsAbout/Group 360.png', title: 'Notification of Family and Friends', description: 'The app can notify your loved ones when an accident happens, keeping them informed and reducing their stress.' },
  { icon: 'iconsAbout/Group 361.png', title: 'Insurance Support', description: 'It provides precise data for insurance claims, making the process smoother.' }
];
