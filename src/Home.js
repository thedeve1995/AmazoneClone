import React, { useState, useEffect } from 'react';
import './CSS/Home.css';
import Product from './Product';
import Purchase from './PurchaseRecommmendation';

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
      <div className='batas-atas'></div>
      <div className="home">
        <button className='left' onClick={handlePrevClick}><i class="fa-solid fa-backward"></i></button>
        
        <div className="home_container">
          <img className="home_image" src={images[currentIndex]}/>
        </div>

        <button className='right' onClick={handleNextClick}><i class="fa-solid fa-forward"></i></button>
      </div>

      <div className='home_row'>
          <Product 
            gambar1="IMG/category/dining.jpg"
            gambar2='IMG/category/home.jpg'
            gambar3='IMG/category/healthnbeauty.jpg'
            gambar4='IMG/category/kitchen.jpg'
            nama1='Dining'
            nama2='Home'
            nama3='Health & Beauty'
            nama4='Kitchen'
          />
          <Product 
            gambar1="IMG/category/uncommon.jpg"
            gambar2='IMG/category/essen.jpg'
            gambar3='IMG/category/selfcare.jpg'
            gambar4='IMG/category/fungame.jpg'
            nama1='Uncommon Finds'
            nama2='Home Essensial'
            nama3='Self Care'
            nama4='Fun Games'
          />
          <Product 
            gambar1="IMG/category/computer.jpg"
            gambar2='IMG/category/vidgame.jpg'
            gambar3='IMG/category/baby.jpg'
            gambar4='IMG/category/toys.jpg'
            nama1='Computers & Accesories'
            nama2='Video Games'
            nama3='Baby'
            nama4='Toys & Games'
          />
          <Product 
            gambar1="IMG/category/headset.jpg"
            gambar2='IMG/category/keyboard.jpg'
            gambar3='IMG/category/ouse.jpg'
            gambar4='IMG/category/chairs.jpg'
            nama1='Headsets'
            nama2='Keyboards'
            nama3='Mouse'
            nama4='Chairs'
          />
          
      </div>
      <div className='recom'>
          <h1>Our Recommendation For You</h1>
          <div className='Purchase__recom'>
              <Purchase 
                  gambar='IMG/product/porcelain.jpg'
                  title='Stone Lain Porcelain 16 Piece Dinnerware Set, Service for 4, Green and Golden Rim'
                  price={108}
                  rating={3}
              />
              <Purchase 
                  gambar='IMG/product/gaming.jpg'
                  title='KERDOM Ergonomic Office Chair, Breathable Mesh Desk Chair'
                  price={139}
                  rating={4} 
              />
              <Purchase 
                  gambar='IMG/product/cctv.jpg'
                  title='Arlo Essential Spotlight Camera - 1 Pack - Wireless Security, 1080p Video, Color Night Vision, 2 Way Audio'
                  price={83}
                  rating={2}
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              <Purchase 
                  gambar='IMG/product/watch.jpg'
                  title='Garmin 010-02173-11 Venu, GPS Smartwatch  with Bright Touchscreen Display, Features Music'
                  price={214}
                  rating={5}
              
              />
              
          </div>
      </div>
      

    </div>
    
  );
}

export default Home;