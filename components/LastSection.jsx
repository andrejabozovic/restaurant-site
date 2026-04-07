import React from 'react';

const LastSection = ({ dict, lang }) => {
  return (
    <section className="testimonials">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        style={{
          backgroundImage: "url('/img/banner12.jpg')",
          position: 'relative',
          paddingTop: '100px',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-md-5 mb-30 mt-60 text-white">
              <p className="mb-0">
                <i className="star-rating"></i><i className="star-rating"></i>
                <i className="star-rating"></i><i className="star-rating"></i>
                <i className="star-rating"></i>
              </p>
              
              <h5 className="text-white" style={{ fontFamily: 'serif', marginTop: '15px' }}>
                {dict?.footer?.title || "A modern restaurant with a menu that will make your mouth water."}
              </h5>

              <div className="reservations mb-10" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <div className="icon color-1" style={{ fontSize: '30px', marginRight: '15px', color: '#c19d68' }}>
                  <span className="flaticon-tray-1"></span>
                </div>
                <div className="text">
                  <p className="color-1 mb-0" style={{ color: '#c19d68' }}>
                    {dict?.footer?.reservationLabel || "Reservation"}
                  </p>
                  <a
                    className="color-1"
                    href="tel:855-100-4444"
                    style={{ color: '#c19d68', fontSize: '20px', fontWeight: 'bold' }}
                  >
                    855 100 4444
                  </a>
                </div>
              </div>
              <p>
                <i className="ti-check"></i>{" "}
                <small>{dict?.footer?.callUs || "Call us, it's toll-free."}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;