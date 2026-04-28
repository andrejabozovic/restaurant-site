"use client";

import React, { useEffect, useState } from 'react';

const galleryItems = [
  { src: "/img/slider/slika1.webp", col: "col-md-4" },
  { src: "/img/slider/slika7.webp", col: "col-md-4" },
  { src: "/img/slider/slika9.webp", col: "col-md-4" },
  { src: "/img/slider/slika11.webp", col: "col-md-6" },
  { src: "/img/slider/slika12.webp", col: "col-md-6" },
  { src: "/img/slider/slika2.webp", col: "col-md-4" },
  { src: "/img/slider/slika3.webp", col: "col-md-4" },
  { src: "/img/slider/slika13.webp", col: "col-md-4" },
];

const PhotoGallery = ({ dict }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };
  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      {/* HEADER SEKCIJA */}
      <div
        className="banner-header valign bg-img bg-fixed"
        data-overlay-dark="5"
        style={{
          backgroundImage: "url('/img/slika17.webp')",
          minHeight: "500px",
          backgroundPosition: "center bottom 20%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5>{dict?.title}</h5>
              <h1>{dict?.description1} <span>{dict?.description2}</span></h1>
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY SEKCIJA */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="row">
            {galleryItems.map((item, index) => (
              <div className={`${item.col} gallery-item`} key={item.src}>
                <button
                  type="button"
                  className="img-zoom"
                  onClick={() => setActiveIndex(index)}
                  style={{ border: "none", padding: 0, background: "transparent", width: "100%" }}
                >
                  <div className="gallery-box">
                    <div className="gallery-img">
                      <img src={item.src} className="img-fluid mx-auto d-block" alt={`gallery-img-${index + 1}`} />
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div
          onClick={closeLightbox}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") closeLightbox();
          }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            style={{
              position: "absolute",
              left: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "34px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              lineHeight: "1",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>

          <img
            src={galleryItems[activeIndex].src}
            alt={`gallery-preview-${activeIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "86vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            style={{
              position: "absolute",
              right: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              border: "none",
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "34px",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              lineHeight: "1",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>

          <button
            type="button"
            aria-label="Close lightbox"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              border: "none",
              background: "rgba(255,255,255,0.18)",
              color: "#fff",
              fontSize: "30px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              lineHeight: "1",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
