import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Card.css';

export default function Card() {
    return (
        <>
        <div className="blog container row g-3">
          <div className="col-md-6">
        
        
            <div className="card m-3">
              <div className="card-body">
              <ul className="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <Link href="#" className="badge bg-danger mb-2"><i class="bi bi-share-fill me-2 small fw-bold"></i>Technology</Link>
                </li>
                <li className="nav-item">
                
                </li>
                </ul>  
                <h5 className="card-title mt-3">Special title treatment</h5>
                <p className=" ">With supporting text below as a natural lead-in to additional content.</p>
                <div className="d-flex align-items-center position-relative">
                <div className="avatar avatar-sm">
                  <img src="http://pngimg.com/uploads/businessman/small/businessman_PNG6575.png" className="avatar" alt="avatar" />
                </div>
                <span className=" ms-3">by <Link to="/" className="stretched-link text-reset ">Samuel</Link></span>
                <h4 className="m-2 pr-2">Nov 20, 2021</h4>  
              </div>
              </div>
         
            </div>
          </div>
          <div className="col-md-6 ">
          <div className="card m-3">
              <div className="card-body">
              <ul className="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <Link href="#" className="badge bg-danger mb-2"><i className="bi bi-signpost me-2 small fw-bold"></i>Technology</Link>
                </li>
                <li className="nav-item">
                
                </li>
                </ul>    
                <h5 className="card-title mt-3">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className="d-flex align-items-center position-relative">
                <div className="avatar avatar-sm">
                  <img src="http://pngimg.com/uploads/thinking_woman/thinking_woman_PNG11646.png" className="avatar" alt="avatar" />
                </div>
                <span className=" ms-3">by <Link to="/" className="stretched-link text-reset ">Samuel</Link></span>
                <h4 className="m-2 pr-2">Nov 20, 2021</h4>  
              </div>
              </div>  
            </div>
            </div>
           
          </div>
               
      
        </>
    )
}
