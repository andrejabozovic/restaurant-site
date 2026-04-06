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
        @keyframes kenburns {
          0% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-kenburns {
          animation: kenburns 5s ease-out forwards;
        }
      `}</style>

      {images.map((image, index) => (
        <div
          key={image}
          className={index === currentImageIndex ? "animate-kenburns" : ""}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
      

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 2 }}></div>
    </div>
  );
}