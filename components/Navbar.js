import Link from 'next/link';
import { getDictionary } from '@/lib/get-dictionary';
import LanguageSwitcher from './LanguageSwitcher';

export default async function Navbar({lang}) {
  const dictionary = await getDictionary(lang);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="logo-wrapper">
          <Link className="logo" href="/"> 
            <img src="/img/logo.png" className="logo-img" alt="Candore Logo" /> 
          </Link>
        </div>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbar" 
          aria-controls="navbar" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"><i className="ti-menu"></i></span> 
        </button>

       
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/"> {dictionary.navigation.home} </Link></li>
            <li className="nav-item"><Link className="nav-link"  href={`/${lang}/menu`}> {dictionary.navigation.menu} </Link></li>
            {/*dropdown*/}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dictionary.navigation.pages.label}
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><Link className="dropdown-item" href={`/${lang}/services`}> {dictionary.navigation.pages.dropdown.services} </Link></li>
                <li><Link className="dropdown-item" href={`/${lang}/image-gallery`}> {dictionary.navigation.pages.dropdown.image_gallery} </Link></li>
                <li><Link className="dropdown-item" href={`/${lang}/video-gallery`}> {dictionary.navigation.pages.dropdown.video_gallery} </Link></li>
              </ul>
            </li>

            <li className="nav-item"><Link className="nav-link" href="/contact"> {dictionary.navigation.contact} </Link></li>

            <LanguageSwitcher />
          </ul>
        </div>

       
      </div>
    </nav>
  );
}