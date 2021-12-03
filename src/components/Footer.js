import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container py-5">
            <hr className="hr" />

          <div className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
              <div className="col-12 col-md">
                <img className="mb-2" src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG87.png" alt="img" width="34" height="34"/>
              <div className="d-block mb-3">&copy; 2021</div>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li className="nav-item"><Link className="nav-link p-0" to="/">Discounts</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Sign up today</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Join the team</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Community</Link></li>
               </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Contact</h5>
              <ul className="list-unstyled text-small">
                <li className="nav-item"><Link to=""><i className="social  bi bi-facebook p-0"></i></Link>  </li>
                <li className="nav-item"><Link to=""><i className="social  bi bi-instagram p-0"></i></Link></li>
                <li className="nav-item"><Link to=""><i className="social  bi bi-twitter p-0"></i></Link></li>
                <li className="nav-item"><Link to=""><i className="social  bi bi-pinterest p-0"></i></Link></li>
               </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li className="nav-item"><Link className="nav-link p-0" to="/">Team</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Locations</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Privacy</Link></li>
                <li className="nav-item"><Link className="nav-link p-0" to="/">Terms</Link></li>
              </ul>
            </div>
           </div>
          </div>
        </div>
               
       
    )
}
