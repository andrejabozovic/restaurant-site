import React from 'react';

const PhotoGallery = ({ dict, lang }) => {
  return (
    <>
      {/* HEADER SEKCIJA */}
      <div 
        className="banner-header valign bg-img bg-fixed" 
        data-overlay-dark="5" 
        style={{ 
          backgroundImage: "url('/img/slika17.webp')",
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
              <a href="/img/slider/slika1.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika1.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/slika2.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika2.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/slika3.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika3.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>

            {/* 2 columns */}
            <div className="col-md-6 gallery-item">
              <a href="/img/slider/slika10.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika10.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 gallery-item">
              <a href="/img/slider/slika11.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika11.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>

            {/* 3 columns */}
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/slika6.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika6.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/slika7.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika7.webp" className="img-fluid mx-auto d-block" alt="work-img" />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 gallery-item">
              <a href="/img/slider/slika8.webp" className="img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img">
                    <img src="/img/slider/slika8.webp" className="img-fluid mx-auto d-block" alt="work-img" />
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