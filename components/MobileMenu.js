"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ lang, dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pathname = usePathname();

  const navigation = dictionary?.navigation || {};
  const dropdown = navigation?.pages?.dropdown || {};

  useEffect(() => {
    setIsOpen(false);
    setPagesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const switchLocalePath = (locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const isLocaleActive = (locale) => pathname?.startsWith(`/${locale}`);

  return (
    <div className="mobile-menu d-lg-none ms-auto">
      <button
        className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
        type="button"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="navbar-toggler-icon">
          <i className={isOpen ? "ti-close" : "ti-menu"}></i>
        </span>
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu-panel" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu-header">
              <Link className="mobile-menu-logo-link" href="/">
                <img src="/img/logoContra.png" className="mobile-menu-logo" alt="Candore Logo" />
              </Link>
              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Close mobile menu"
                onClick={() => setIsOpen(false)}
              >
                <i className="ti-close"></i>
              </button>
            </div>

            <ul className="mobile-menu-list">
              <li>
                <Link className="mobile-menu-link" href="/">
                  {navigation?.home || "Home"}
                </Link>
              </li>
              <li>
                <Link className="mobile-menu-link" href={`/${lang}/menu`}>
                  {navigation?.menu || "Menu"}
                </Link>
              </li>
              <li className={`mobile-menu-pages ${pagesOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="mobile-menu-pages-button"
                  onClick={() => setPagesOpen((prev) => !prev)}
                  aria-expanded={pagesOpen}
                >
                  <span>{navigation?.pages?.label || "Pages"}</span>
                  <i className={pagesOpen ? "ti-angle-up" : "ti-angle-down"}></i>
                </button>
                {pagesOpen && (
                  <ul className="mobile-menu-sublist">
                    <li>
                      <Link className="mobile-menu-sublink" href={`/${lang}/services`}>
                        {dropdown?.services || "Services"}
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile-menu-sublink" href={`/${lang}/image-gallery`}>
                        {dropdown?.image_gallery || "Image Gallery"}
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile-menu-sublink" href={`/${lang}/video-gallery`}>
                        {dropdown?.video_gallery || "Video Gallery"}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link className="mobile-menu-link" href="/contact">
                  {navigation?.contact || "Contact"}
                </Link>
              </li>
            </ul>

            <div className="mobile-menu-langs">
              <Link
                href={switchLocalePath("sr")}
                className={`mobile-menu-lang ${isLocaleActive("sr") ? "active" : ""}`}
              >
                SR
              </Link>
              <span>|</span>
              <Link
                href={switchLocalePath("en")}
                className={`mobile-menu-lang ${isLocaleActive("en") ? "active" : ""}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
