import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import SubscribeForm from "./SubscribeForm";

export default function Footer({ dict }) {
  const footer = dict?.footer || {
    aboutTitle: "About Us",
    aboutDescription: "Restaurant metus dibus eudui aolicitudin istique lacus in the vestibulum congue est vitae maximus duru ne lacus in massa tristique aharetra ne ut isum.",
    language: "English",
    contactTitle: "Contact Info",
    address: "Stefana Nemanje 17, Istocno Sarajevo, Bosnia and Herzegovina",
    phone1: "+387 66 739 468",
    phone2: "+387 66 488 838",
    email: "info@luxuryhotel.com",
    subscribeTitle: "Subscribe",
    subscribeDescription: "Want to be notified when we launch a new template or an update? Just sign up and we will send you a notification by email.",
    emailPlaceholder: "Your email",
    subscribeButton: "SUBSCRIBE",
    copyright: "Copyright 2026 by",
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* About */}
            <div className="col-md-4">
              <div className="footer-column footer-about">
                <h3 className="footer-title">
                  {footer.aboutTitle}
                </h3>

                <p className="footer-about-text">
                  {footer.aboutDescription}
                </p>

                <div className="footer-language">
                  <i className="lni ti-world"></i>

                  <LanguageSelect language={footer.language} />
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="col-md-3 offset-md-1">
              <div className="footer-column footer-contact">
                <h3 className="footer-title">
                  {footer.contactTitle}
                </h3>

                <p className="footer-contact-text">
                  {footer.address}
                </p>

                <div className="footer-contact-info">
                  <p className="footer-contact-phone">
                    {footer.phone1} <br />
                    {footer.phone2}
                  </p>

                  <p className="footer-contact-mail">
                    {footer.email}
                  </p>
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

            {/* Working Hours */}
<div className="col-md-4">
<div className="footer-column footer-hours">
    <h3 className="footer-title">
      {footer.workingHoursTitle}
    </h3>

    <p className="footer-contact-text">
      {footer.workingDays} <br />
      {footer.workingDaysHours}
    </p>

    <p className="footer-contact-text">
      {footer.weekend} <br />
      {footer.weekendHours}
    </p>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-bottom-inner">
                <p className="footer-bottom-copy-right">
                  {footer.copyright}{" "}
                  <Link href="/">DuruThemes.com</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
