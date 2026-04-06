"use client"; 
import { useState, useEffect } from 'react';

const images = [
  '/img/slider/1.jpg',
  '/img/slider/2.jpg',
  '/img/slider/3.jpg',
];

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden', background: '#000' }}>
      
      <style>{`
        @keyframes zoomToTopRight {
          0% { 
            transform: scale(1.3); 
          }
          100% { 
            transform: scale(1); 
          }
        }
        .animate-top-right {
          transform-origin: top right; 
          /* Koristimo linear da pokret bude konstantan bez trzanja */
          animation: zoomToTopRight 10s linear infinite; 
        }
      `}</style>

      {images.map((image, index) => {
        const isActive = index === currentImageIndex;
        return (
          <div
            key={image}
            className="animate-top-right"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 2.5s ease-in-out', 
              zIndex: isActive ? 1 : 0,
            }}
          />
        );
      })}
      
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 5 }}></div>
    </div>
  );
}