import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon banner"
      />

      <div className="home__row">
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={123412}
          title="Charging Cable"
          price={20}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
