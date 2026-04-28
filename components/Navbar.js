import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default async function Navbar({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <Link className="logo" href="/">
            <img
              src="/img/logoContra.png"
              className="logo-img"
              alt="Candore Logo"
            />
          </Link>
        </div>

        <div className="d-none d-lg-block ms-auto">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                {" "}
                {dictionary.navigation.home}{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/${lang}/menu`}>
                {" "}
                {dictionary.navigation.menu}{" "}
              </Link>
            </li>
            {/*dropdown*/}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dictionary.navigation.pages.label}
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li>
                  <Link className="dropdown-item" href={`/${lang}/services`}>
                    {" "}
                    {dictionary.navigation.pages.dropdown.services}{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${lang}/image-gallery`}
                  >
                    {" "}
                    {dictionary.navigation.pages.dropdown.image_gallery}{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={`/${lang}/video-gallery`}
                  >
                    {" "}
                    {dictionary.navigation.pages.dropdown.video_gallery}{" "}
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                {" "}
                {dictionary.navigation.contact}{" "}
              </Link>
            </li>

            <LanguageSwitcher />
          </ul>
        </div>

        <MobileMenu lang={lang} dictionary={dictionary} />
      </div>
    </nav>
  );
}
