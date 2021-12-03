import React from 'react'
import '../styles/Cover.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export default function Home() {
  
    return (
    <> 
      <Helmet>
        <title>Blog demo</title>
            <meta
              name='description'
              content='/'/>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
              <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
            </Helmet>  
            <div className="cover py-5">
              <div className="container text-center py-5"> 
                <h1 className="py-4">Paper plane</h1>
               
                <img className="img" src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG87.png " alt=""/>
            
                <p className=" m-4"> A blogging web app built with react.js, python, django & postgres.</p>
                <Link className="btn btn-md" to="/Blog">Shop now</Link>
              </div>
           
              <div className=" text-center pt-5">
                <i className="icons bi bi-github"></i>
                <p className="par">© Copyright 2021 Blog demo</p>
              </div>
            </div>
    </>
    )
}

