import HeroSlider from '../components/HeroSlider';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';

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
                  style={{ width: '120px', filter: 'invert(1)' }}
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
      <section className="chef-recommends section-padding bg-cream">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">Should to Try</div>
                <div className="section-title">Chef Recommends</div>
                <div className="section-backtitle">Menu</div>
                <span className="icon">
                  <i className="flaticon-chef"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Burger */}
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="/img/chef/hamburger.jpg" alt="burger" />
                </div>
                <span className="category">NEW</span>
                <div className="con">
                  <div className="icon flaticon-hamburger-1"></div>
                  <h6>Food</h6>
                  <h5>Rusty’s Burger</h5>
                  <div className="line"></div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="permalink">
                        Smoked pulled beef ribs, bbq sauce...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Salad */}
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="/img/chef/salad.jpg" alt="salad" />
                </div>
                <div className="con">
                  <div className="icon flaticon-salad"></div>
                  <h6>Salad</h6>
                  <h5>Waldorf Salad</h5>
                  <div className="line"></div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="permalink">
                        Lettuce, celery, apple, grape, walnut...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wine */}
            <div className="col-md-4">
              <div className="item">
                <div className="position-re o-hidden">
                  <img src="/img/chef/wine.jpg" alt="wine" />
                </div>
                <div className="con">
                  <div className="icon flaticon-whisky"></div>
                  <h6>Wine</h6>
                  <h5>Corvo Dal 1824</h5>
                  <div className="line"></div>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <div className="permalink">
                        Dessert Wine, Bordeaux, Graves...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*reviews */}

      <section
        className="background bg-img bg-fixed section-padding"
        style={{
          backgroundImage: "url(/img/banner5.jpg)",
          position: 'relative',
          padding: '120px 0',
          backgroundSize: 'cover'
        }}
      >

        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">


            <div className="col-md-6">
              <Testimonials />
            </div>


            <div className="col-md-5 offset-md-1">
              <div className="opening-hours-box" style={{
                backgroundColor: '#161616',
                padding: '50px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                textAlign: 'center',
                borderRadius: '2px'
              }}>
                <div className="head-box mb-20">
                  <h4 style={{ color: '#fff', fontFamily: 'serif' }}>Opening Hours</h4>
                </div>
                <div className="content-box">
                  <div className="row">
                    <div className="col-md-5">
                      <h6 className="day" style={{ color: '#c19d68', fontSize: '13px' }}>Sunday to Tuesday</h6>
                      <span className="time" style={{ color: '#fff', fontSize: '20px' }}>10:00 - 22:00</span>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center">
                      <div style={{ width: '1px', backgroundColor: '#333', height: '100%' }}></div>
                    </div>
                    <div className="col-md-5">
                      <h6 className="day" style={{ color: '#c19d68', fontSize: '13px' }}>Friday to Saturday</h6>
                      <span className="time" style={{ color: '#fff', fontSize: '20px' }}>12:00 - 19:00</span>
                    </div>
                  </div>
                </div>

                <Link href="/reservation" className="button-1 mt-30" style={{ width: '100%', display: 'block' }}>
                  MAKE A RESERVATION
                </Link>

                <div className="mt-20">
                  <p style={{ marginBottom: '5px' }}>
                    <small style={{ color: '#999' }}>You can also call: </small>
                    <a href="tel:8551004444" style={{ color: '#c19d68' }}>855 100 4444</a>
                  </p>
                  <p className="mt-0">
                    <i className="ti-location-pin" style={{ color: '#c19d68', marginRight: '5px' }}></i>
                    <small style={{ color: '#999' }}>1616 Broadway NY, New York 10001 USA</small>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/*Services box*/}
      <section className="services-box section-padding" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row">

            {/* Breakfast Box */}
            <div className="col-md-4">
              <div className="item">
                <span className="icon flaticon-cooking"></span>
                <div className="cont">
                  <h5>Breakfast</h5>
                  <p>
                    Breakfast ut nisl quam nestibulum drana odio elementum
                    sceisue the can golden varius the dis monte.
                  </p>
                </div>
              </div>
            </div>

            {/* Lunch Box */}
            <div className="col-md-4">
              <div className="item">
                <span className="icon flaticon-tray-2"></span>
                <div className="cont">
                  <h5>Lunch</h5>
                  <p>
                    The Lunch ut nisl quam nestibulum drana odio elementum
                    sceisue the can golden varius the dis monte.
                  </p>
                </div>
              </div>
            </div>

            {/* Dinner Box */}
            <div className="col-md-4">
              <div className="item">
                <span className="icon flaticon-chef-1"></span>
                <div className="cont">
                  <h5>Dinner</h5>
                  <p>
                    The Dinner ut nisl quam nestibulum drana odio elementum
                    sceisue the can golden varius the dis monte.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/*Our features*/}
      <div className="first-class-services section-padding">
        <div className="container">
          {/* Naslov sekcije */}
          <div className="row">
            <div className="col-md-12">
              <div className="section-head text-center">
                <div className="section-subtitle">First-Class</div>
                <div className="section-title white">Our Features</div>
                <div className="section-backtitle">Services</div>
                <span className="icon white">
                  <i className="flaticon-tray-2"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Kartice sa flip efektom */}
          <div className="row">

            {/* 1. Current Menu */}
            <div className="col-md-4">
              <div className="square-flip">
                <div
                  className="square bg-img"
                  style={{ backgroundImage: "url('/img/services/1.jpg')" }}
                >
                  <span className="sale">NEW</span>
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <div className="icon flaticon-menu"></div>
                      <h6>Current Menu</h6>
                      <h4>Daily New Fresh Menus</h4>
                    </div>
                  </div>
                  <div className="flip-overlay"></div>
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>Current Menu</h6>
                    <h4>Daily New Fresh Menus</h4>
                    <p>
                      <i>Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.</i>
                    </p>
                    <Link href="/menu" className="button-4 mt-15">
                      View Menu<span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Address of Taste */}
            <div className="col-md-4">
              <div className="square-flip">
                <div
                  className="square bg-img"
                  style={{ backgroundImage: "url('/img/services/2.jpg')" }}
                >
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <div className="icon flaticon-food-serving"></div>
                      <h6>Address of Taste</h6>
                      <h4>Fresh Ingredient Meals</h4>
                    </div>
                  </div>
                  <div className="flip-overlay"></div>
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>Address of Taste</h6>
                    <h4>Fresh Ingredient Meals</h4>
                    <p>
                      <i>Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.</i>
                    </p>
                    <Link href="/menu" className="button-4 mt-15">
                      View Menu<span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Executive Chefs */}
            <div className="col-md-4">
              <div className="square-flip">
                <div
                  className="square bg-img"
                  style={{ backgroundImage: "url('/img/services/3.jpg')" }}
                >
                  <div className="square-container d-flex align-items-end justify-content-end">
                    <div className="box-title">
                      <div className="icon flaticon-chef"></div>
                      <h6>Executive Chefs</h6>
                      <h4>Senior & Talented Chefs</h4>
                    </div>
                  </div>
                  <div className="flip-overlay"></div>
                </div>
                <div className="square2">
                  <div className="square-container2">
                    <h6>Executive Chefs</h6>
                    <h4>Senior & Talented Chefs</h4>
                    <p>
                      <i>Lorem nisl miss nestibulum nec odio duru the aucan ula orci varius natoque enatau manis dis arturient monte miss morbine.</i>
                    </p>
                    <Link href="/chefs" className="button-4 mt-15">
                      Our Chefs<span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}