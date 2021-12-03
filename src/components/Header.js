import React from 'react';
import '../styles/Header.css';


export default function Header() {
    return (
        <>
        <div className="container py-3">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./images/photo4.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h1 className="">Finance</h1>
                <p className="pb-5">Get the latest stock market data on the hour every hour.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./images/photo2.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Science & Tech</h1>
                <p className="pb-5">Check out the latest in science and tech.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src=" ./images/photo3.jpg" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h1>Travel</h1>
                <p className="pb-5">Explore some of the latest travel destinations.</p>
              </div>
            </div>
           </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button> 
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    )
} 