import React from 'react';

const PhotoGallery = ({ dict, lang }) => {
  return (
    <>
      {/* HEADER SEKCIJA */}
      <div 
        className="banner-header valign bg-img bg-fixed" 
        data-overlay-dark="5" 
        style={{ 
          backgroundImage: "url('/img/banner2.jpg')",
          minHeight: "500px" 
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5>Portfolio</h5>
              <h1>Our Gallery <span>Image Gallery</span></h1>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY SEKCIJA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            {/* 3 columns */}
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/10.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/10.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/8.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/8.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/9.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/9.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>

            {/* 2 columns */}
            <div className="col-md-6 gallery-item">
              <a href="/img/slider/13.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/13.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 gallery-item">
              <a href="/img/slider/14.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/14.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>

            {/* 3 columns */}
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/5.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/5.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/2.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/2.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/3.jpg" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/3.jpg" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoGallery;