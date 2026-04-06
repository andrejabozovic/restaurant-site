import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/menu">Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/wine">Wine</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}