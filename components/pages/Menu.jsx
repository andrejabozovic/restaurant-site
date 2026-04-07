import React from "react";
import LastSection from "../LastSection";

const Menu = ({ 
  title = "Menu Book", 
  subtitle = "Food & Wine", 
  smallTitle = "Restaurant", 
  backgroundImage = "/img/banner10.jpg", 
  overlayDark = 4 
}) => {

  // Podaci za jelovnik
  const menuData = [
    {
      category: "Starters",
      items: [
        { name: "Mozzarella Dippers", price: "$27.00", desc: "Fried mozzarella sticks, marinara sauce", img: "/img/menu/starters/1.jpg" },
        { name: "Buffalo Wings", price: "$30.50", desc: "Spicy chicken wings, blue cheese sauce, carrot, celery", img: "/img/menu/starters/2.jpg" },
        { name: "Onion Rings", price: "$15.00", desc: "Fried onion rings, smoked aioli", img: "/img/menu/starters/3.jpg" },
        { name: "Chilli Con Carne", price: "$20.00", desc: "Spicy ground beef, bacon, kidney beans", img: "/img/menu/starters/4.jpg" },
      ]
    },
    {
      category: "Main Courses",
      items: [
        { name: "Rusty’s Burger", price: "$35.00", desc: "Smoked pulled beef ribs, bbq sauce, cheddar, crispy", img: "/img/menu/mains/1.jpg" },
        { name: "Cajun Fish Steak", price: "$30.00", desc: "Cajun spicied seabass, deep fried baby potatoes", img: "/img/menu/mains/2.jpg" },
        { name: "Southern Fried Chicken", price: "$45.50", desc: "Cajun coated chicken breast, fries and honey mustard", img: "/img/menu/mains/3.jpg" },
        { name: "House Avocado Tempura", price: "$40.00", desc: "Sweetcorn kernels, butter, cloves garlic, potato", img: "/img/menu/mains/4.jpg" },
      ]
    },
    {
      category: "Salads",
      items: [
        { name: "Ceaser Salad", price: "$15.00", desc: "Romaine lettuce, croutons, parmigiano", img: "/img/menu/salads/1.jpg" },
        { name: "Waldorf Salad", price: "$10.00", desc: "Lettuce, celery, apple, grape, walnut, waldorf sauce", img: "/img/menu/salads/2.jpg" },
        { name: "Grilled Salmon Salad", price: "$25.00", desc: "Grilled salmon, mixed greens, capers, orange slices", img: "/img/menu/salads/3.jpg" },
        { name: "Chicken Cobb Salad", price: "$30.50", desc: "Iceberg lettuce, cherry tomatoes, blue cheese, avocado", img: "/img/menu/salads/4.jpg" },
      ]
    },
    {
      category: "Wine",
      items: [
        { name: "Riscos Malbec", price: "$25.00", desc: "Full, Redcurrant, Spice, Chile", img: "/img/menu/wine/1.jpg" },
        { name: "Dom Perignon", price: "$30.00", desc: "Stylish, Premium, Iconic, Champagne", img: "/img/menu/wine/2.jpg" },
        { name: "Amarone Classico", price: "$20.00", desc: "Intense, Rich, Spice, Italy", img: "/img/menu/wine/3.jpg" },
        { name: "Valle Berta Gavi", price: "$45.00", desc: "Clean, Soft, Honeysuckle, Italy", img: "/img/menu/wine/4.jpg" },
      ]
    }
  ];

  return (
    <>

      <div
        className="banner-header valign bg-img bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-overlay-dark={overlayDark}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center caption mt-60">
              <h5>{smallTitle}</h5>
              <h1>
                {title} <span>{subtitle}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="menu-book section-padding position-re bg-blck">
        <div className="container">
          {menuData.map((section, idx) => (
            <div className="row mb-90" key={idx}>
              <div className="col-md-12 text-center">
                <div className="section-head mb-60">
                  <div className="section-title white">{section.category}</div>
                </div>
              </div>
              

              <div className="col-md-6">
                {section.items.slice(0, 2).map((item, i) => (
                  <div className="menu-list mb-30" key={i}>
                    <div className="item">
                      <div className="img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="flex">
                        <div className="title">{item.name}</div>
                        <div className="dots"></div>
                        <div className="price">{item.price}</div>
                      </div>
                      <p><i>{item.desc}</i></p>
                    </div>
                  </div>
                ))}
              </div>


              <div className="col-md-6">
                {section.items.slice(2, 4).map((item, i) => (
                  <div className="menu-list mb-30" key={i}>
                    <div className="item">
                      <div className="img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="flex">
                        <div className="title">{item.name}</div>
                        <div className="dots"></div>
                        <div className="price">{item.price}</div>
                      </div>
                      <p><i>{item.desc}</i></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Last Section */}
      <LastSection />
    </>
  );
};

export default Menu;