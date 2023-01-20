import React, { useState, useEffect } from 'react';
import './CSS/Home.css';

function Home() {
  const images = ["IMG/lunar.jpg", "IMG/computer.jpg", "IMG/home.jpg", "IMG/Beauty.jpg", "IMG/shipping.jpg", "IMG/toys.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div>

      <div className="home">
        <button className='left' onClick={handlePrevClick}><i class="fa-solid fa-backward"></i></button>
        
        <div className="home_container">
          <img className="home_image" src={images[currentIndex]}/>
        </div>

        <button className='right' onClick={handleNextClick}><i class="fa-solid fa-forward"></i></button>
      </div>
      <div className='home_row'>
          {/* product */}
          {/* product */}
      </div>
      <div className='home_row'>
          {/* product */}
          {/* product */}
          {/* product */}
      </div>

    </div>
    
  );
}

export default Home;