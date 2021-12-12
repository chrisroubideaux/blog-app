import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context"
import '../styles/Navbar.css'


export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
    return (
        <>
        <nav className="navbar navbar-expand-sm  justify-space-between">
          <div className="container-fluid">
            <Link className="nav-link" aria-current="page" to="/">
              <img className="img" src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG87.png " alt=""/>  
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="social bi bi-filter-left"></i></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-lg-center" id="navbarsExample10">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/News">News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Write">Post</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Settings">Settings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login"onClick={handleLogout}>
                     {user && "LOGOUT"}  Logout</Link>
                </li>
                {user ? (
                <Link to="/Settings">
                  <img className="topImg" src={PF+user.profilePic} alt="" />
                </Link>
                ) : (
                <><li className="nav-item">
                    <Link className="nav-link" to="/Login">
                      Login
                    </Link>
                </li></>
                )}
                <li className="nav-item ">
                  <Link className="nav-link" to="/Signup"><i className="social bi bi-person-fill"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container text-center"> 
          <hr className="hr"/>
        </div>  
        </>
      );
  }