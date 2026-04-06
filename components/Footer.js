"use client";
import Link from 'next/link';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde ide logika za prijavu na newsletter
    console.log("Email submitted");
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* About Us Sekcija */}
            <div className="col-md-4">
              <div className="footer-column footer-about">
                <h3 className="footer-title">About Us</h3>
                <p className="footer-about-text">
                  Restaurant metus dibus eudui aolicitudin istique lacus in the
                  vestibulum congue est vitae maximus duru ne lacus in massa
                  tristique aharetra ne ut isum.
                </p>
                <div className="footer-language">
                  <i className="lni ti-world"></i>
                  {/* Select u React-u koristi onChange za navigaciju */}
                  <select 
                    defaultValue="#0" 
                    onChange={(e) => { if(e.target.value !== "#0") window.location.href = e.target.value }}
                  >
                    <option value="#0">English</option>
                    <option value="#de">German</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Info Sekcija */}
            <div className="col-md-3 offset-md-1">
              <div className="footer-column footer-contact">
                <h3 className="footer-title">Contact Info</h3>
                <p className="footer-contact-text">
                  Stefana Nemanje 17, Istočno Sarajevo
                  <br />
                  Bosnia i Herzegovina
                </p>
                <div className="footer-contact-info">
                  <p className="footer-contact-phone">+387 66 739 468 <br /> +387 66 488 838</p>
                  <p className="footer-contact-mail">info@luxuryhotel.com</p>
                </div>
                <div className="footer-about-social-list">
                  <a href="#"><i className="ti-instagram"></i></a>
                  <a href="#"><i className="ti-twitter"></i></a>
                  <a href="#"><i className="ti-youtube"></i></a>
                  <a href="#"><i className="ti-facebook"></i></a>
                  <a href="#"><i className="ti-pinterest"></i></a>
                </div>
              </div>
            </div>

            {/* Subscribe Sekcija */}
            <div className="col-md-4">
              <div className="footer-column footer-explore clearfix">
                <h3 className="footer-title">Subscribe</h3>
                <div className="row subscribe">
                  <div className="col-md-12">
                    <p>
                      Want to be notified when we launch a new template or an
                      update. Just sign up and we'll send you a notification by email.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="search"
                        placeholder="Your email"
                        required
                      />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Sekcija */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom-inner">
                <p className="footer-bottom-copy-right">
                  © Copyright 2026 by <Link href="/">DuruThemes.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}