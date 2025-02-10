import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './AdvancedFeature.css'

export default function AdvancedFeature() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Advanced Feature</h2>

      <div className="row justify-content-between">
        {/* Owner App */}
        <div className="col-md-5 mb-4">
          <div className="p-3 feature-card">
            <Carousel fade interval={1000} className="custom-carousel">
              <Carousel.Item>
                <img src="/imgAnim/Owner/owner (1).svg" className="img-fluid rounded" alt="Owner App 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Owner/owner (2).svg" className="img-fluid rounded" alt="Owner App 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Owner/owner (3).svg" className="img-fluid rounded" alt="Owner App 3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Owner/owner (4).svg" className="img-fluid rounded" alt="Owner App 3" />
              </Carousel.Item>
            </Carousel>
            <h4 className="text-primary mt-3">Owner App</h4>
            <p className="text-muted">
            An Owner App is typically designed to provide the owner or administrator of a service, 
            vehicle, or business with full control and visibility over operations. When it comes to an 
            Accident Tracking and Rescue System, an Owner App can offer a range of features tailored to 
            ensure better management and oversight.
            </p>
          </div>
        </div>

        {/* Emergency App */}
        <div className="col-md-5 mb-4">
          <div className="p-3 feature-card">
            <Carousel fade interval={1000} className="custom-carousel">
              <Carousel.Item>
                <img src="/imgAnim/Emergency/Emergency (1).svg" className="img-fluid rounded" alt="Emergency App 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Emergency/Emergency (2).svg" className="img-fluid rounded" alt="Emergency App 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Emergency/Emergency (3).svg" className="img-fluid rounded" alt="Emergency App 3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Emergency/Emergency (4).svg" className="img-fluid rounded" alt="Emergency App 3" />
              </Carousel.Item>
            </Carousel>
            <h4 className="text-primary mt-3">Emergency App</h4>
            <p className="text-muted">
            An Emergency App is designed to provide fast and effective assistance during critical situations, ensuring that users can get help quickly in emergencies. These apps typically focus on safety, real-time communication, and quick access to emergency services. Here’s how an Emergency App can be valuable
             </p>
          </div>
        </div>

        {/* Admin App */}
        <div className="col-md-12 mt-4 d-flex justify-content-center">
          <div className="p-3 feature-card col-lg-6 text-center">
            <Carousel fade interval={1000} className="custom-carousel">
              <Carousel.Item>
                <img src="/imgAnim/Admin/Admin (1).svg" className="img-fluid rounded" alt="Admin App 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Admin/Admin (2).svg" className="img-fluid rounded" alt="Admin App 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Admin/Admin (3).svg" className="img-fluid rounded" alt="Admin App 3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Admin/Admin (4).svg" className="img-fluid rounded" alt="Admin App 3" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="/imgAnim/Admin/Admin (5).svg" className="img-fluid rounded" alt="Admin App 3" />
              </Carousel.Item>
            </Carousel>
            <h4 className="text-primary mt-3 text-start">Admin App</h4>
            <p className="text-muted text-start">
            An Emergency App is designed to provide fast and effective assistance during critical situations, ensuring that users can get help quickly in emergencies. These apps typically focus on safety, real-time communication, and quick access to emergency services. Here’s how an Emergency App can be valuable
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3 overflow-hidden">
  <img 
    src="./img/Frame 16.svg" 
    alt="" 
    className="custom-image"
  />
</div>


      <div className="row mt-5">
         <img src="./img/Frame 20.svg" alt="" />
      </div>
    </section>
  );
}
