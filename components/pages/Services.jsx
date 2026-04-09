import Link from 'next/link';
import Image from 'next/image';
import LastSection from '../LastSection';

export default function ServicesPage({ dictionary }) {
  return (
    <>
      {/* Banner Header */}
      <div 
        className="banner-header valign bg-img bg-fixed" 
        data-overlay-dark="5" 
        style={{ backgroundImage: "url('/img/banner2.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5></h5>
              <h1>Our Services <span>And Features</span></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
          <section className="services-1 section-padding bg-cream">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-hamburger-1"></span>
              <h5>Cheeseburger</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-hamburger-1"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-pizza-1"></span>
              <h5>Pizza Slice</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-pizza-1"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-coffee-cup"></span>
              <h5>Coffee-Cup</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-coffee-cup"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-chicken-leg"></span>
              <h5>Chicken-Leg</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-chicken-leg-1"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-fish"></span>
              <h5>Fish</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-fish"></span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <span className="flaticon-wedding-cake"></span>
              <h5>Wedding Cake</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the drana
                miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div className="shape">
                <span className="flaticon-wedding-cake"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features*/}
       <div 
      className="first-class-services section-padding"
      style={{
        // Gornjih 50% je transparentno (vidi se tamna pozadina), donjih 50% je bijelo
        background: "linear-gradient(to bottom, transparent 50%, #ffffff 50%)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-head text-center">
              <div className="section-subtitle">Firs-Class</div>
              {/* Vraćena klasa 'white' jer je pozadina gore opet tamna */}
              <div className="section-title white">Our Features</div>
              <div className="section-backtitle">Services</div>
              <span className="icon white">
                <i className="flaticon-tray-2"></i>
              </span>
            </div>
          </div>
        </div>
        
        <div className="row">
          {/* Prva kartica */}
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
                  <a href="#0" className="button-4 mt-15">View Menu<span></span></a>
                </div>
              </div>
            </div>
          </div>

          {/* Druga kartica */}
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
                  <a href="#0" className="button-4 mt-15">View Menu<span></span></a>
                </div>
              </div>
            </div>
          </div>

          {/* Treća kartica */}
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
                  <a href="#0" className="button-4 mt-15">Our Chefs<span></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* FAQ & Image Section */}
      <section className="wine-banner menu-book bg-blck">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 valign"> 
            <div className="content">
              <div className="section-head mb-30">
                <div className="section-subtitle">Frequently Asked Questions</div>
                <div className="section-title white">Common Questions</div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="accordion-box clearfix">
                    <li className="accordion block">
                      <div className="acc-btn size-20">How can I book private dinner?</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Restaurant ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. 
                            Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus 
                            nellentesque habitant morbine.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn size-20">How frequently do you change the menu?</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Restaurant ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. 
                            Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus 
                            nellentesque habitant morbine.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn size-20">How do I change / cancel a reservation?</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Restaurant ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. 
                            Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus 
                            nellentesque habitant morbine.
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="accordion block">
                      <div className="acc-btn size-20">What is the special menu offer?</div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Restaurant ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. 
                            Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus 
                            nellentesque habitant morbine.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>           
            </div> 
          </div> 
          <div className="col-md-6 p-0"> 
            <div className="img"> 
              <img src="/img/banner5.jpg" alt="FAQ Banner" /> 
            </div> 
          </div>
        </div>
      </div>
    </section>

    <LastSection/>

    </>
  );
}