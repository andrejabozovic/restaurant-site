import HeroSlider from '../components/HeroSlider';

export default function Page() {
  return (
    <main>
      <aside 
        className="kenburns-section" 
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: "url('/img/slider/1.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        <HeroSlider />

  
        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row">
            <div className="col-md-12 text-center text-white">
              <h6 style={{ letterSpacing: '4px', marginBottom: '20px', color: '#fff' }}>EST. 1895</h6>
              <h1 style={{ fontSize: '60px', fontWeight: '400', color: '#fff' }}>
                Welcome to <span style={{ color: '#fff' }}>Contra</span>
                <span style={{ color: '#c19d68', display: 'block', fontSize: '35px', marginTop: '10px', fontStyle: 'italic' }}>
                  Restaurant & Wine Bar
                </span>
              </h1>
              <p style={{ marginTop: '20px', fontSize: '18px', color: '#fff', opacity: '0.8' }}>
                1616 Broadway NY, New York
              </p>
              <div className="mt-30">
                <a href="#" className="button-1">CHECK OUR MENU <span></span></a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/*About section*/}
      <section className="about section-padding" style={{ padding: '100px 0', backgroundColor: '#fff', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-30">
              <div className="section-head mb-20">
                <div className="section-subtitle" style={{ color: '#c19d68', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                  Candóre Restaurant
                </div>
                <h2 className="section-title" style={{ fontSize: '45px', marginBottom: '20px', fontFamily: 'serif' }}>
                  Few Words About Us
                </h2>
              </div>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Restaurant vulputate massa sit amet ravida haretra nuam enim mi obortis eset uctus enec accumsan eu justo aliquam sit amet auctor orci donec vitae vehicula risus duise nunc sapien...
              </p>
              <div className="reservations" style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                <div className="icon" style={{ fontSize: '40px', color: '#c19d68', marginRight: '15px' }}>
                  <span className="flaticon-tray-1"></span>
                </div>
                <div className="text">
                  <p style={{ margin: 0, fontSize: '12px', color: '#999' }}>Reservation</p> 
                  <a href="tel:855-100-4444" style={{ fontSize: '22px', color: '#1a1a1a', textDecoration: 'none', fontWeight: 'bold' }}>855 100 4444</a>
                </div>
              </div>
            </div>
            <div className="col-md-3"> <img src="/img/about2.jpg" alt="" style={{ width: '100%', marginTop: '90px' }} /> </div>
            <div className="col-md-3"> <img src="/img/about.jpg" alt="" style={{ width: '100%' }} /> </div>
          </div>
        </div>
      </section>

      {/*Chef section*/}
      <section className="about section-padding bg-blck" style={{ padding: '100px 0', backgroundColor: '#111', color: '#fff', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* Slika Chefa sa pomjeranjem (offset) */}
            <div className="col-md-5 offset-md-1 mb-30"> 
              <img 
                src="/img/chef/chef.jpg" 
                alt="Our Master Chef" 
                style={{ width: '100%', height: 'auto', borderRadius: '0', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
              />
            </div>
            
            {/* Tekstualni dio */}
            <div className="col-md-5 mb-30">
              <div className="section-head mb-20">
                <div className="section-subtitle" style={{ color: '#c19d68', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>
                  20 Years of Experience
                </div>
                <h2 className="section-title white" style={{ fontSize: '45px', color: '#fff', fontFamily: 'serif', marginTop: '10px' }}>
                  Big Chef's Menu
                </h2>
              </div>
              
              <p style={{ color: '#aaa', lineHeight: '1.8', marginBottom: '30px' }}>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana miss uctus enec accumsan eu justo aliquam sit amet auctor orci done vitae vehicula risus duise nunc sapien, accumsan id mauris rutrum asiquam congue nie ipsum auctor frinilla finibus sapien.
              </p>
              
              {/* Potpis i ime */}
              <div className="about-bottom" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}> 
                <img 
                  src="/img/signature.svg" 
                  alt="Signature" 
                  style={{ width: '120px', filter: 'invert(1)' }} /* Invertujemo ako je potpis crn da bi bio bijeli */
                />
                <div className="about-name-wrapper">
                  <div className="about-name" style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold' }}>
                    Harold Brown
                  </div>
                  <div className="about-rol" style={{ color: '#c19d68', fontSize: '14px', textTransform: 'uppercase' }}>
                    Master Chef
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*Chef recommendation*/}
   
    </main>
  );
}