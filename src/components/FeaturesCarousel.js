import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FeaturesCarousel = () => {
  const features = [
    {
      title: "Register",
      description: "Sign up to get access to job listings, apply for positions, and manage your placement applications.",
    },
    {
      title: "Browse Jobs",
      description: "Explore a wide range of job opportunities from top companies around the world.",
    },
    {
      title: "Admin Panel",
      description: "Admins can manage job postings, track student applications, and oversee the placement process.",
    },
    {
      title: "Student Dashboard",
      description: "Students can monitor their applications, receive updates, and manage their profile.",
    },
    {
      title: "Company Collaboration",
      description: "Companies can post job listings, review applicants, and connect with top talent.",
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into placement trends and performance metrics.",
    },
  ];

  // Group features into chunks of 3 for each carousel item
  const featureChunks = [];
  for (let i = 0; i < features.length; i += 3) {
    featureChunks.push(features.slice(i, i + 3));
  }

  return (
    <section className="py-5">
      <div id="featuresCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner">
          {featureChunks.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="d-flex justify-content-around">
                {chunk.map((item, idx) => (
                  <div key={idx} className="card text-center m-2" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#featuresCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#featuresCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators">
          {featureChunks.map((_, index) => (
            <li
              key={index}
              data-target="#featuresCarousel"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
