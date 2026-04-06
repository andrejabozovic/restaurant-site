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
    </main>
  );
}