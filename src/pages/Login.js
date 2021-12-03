import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context"
import { Helmet } from 'react-helmet';
import '../styles/Forms.css';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/Login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
 
    return (
        <>
        <Helmet>
          <title>Login</title>
            <meta
              name='description'
              content='Login-page'
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
            </Helmet>
          <div className=" forms text-center py-5">
            <h3 className="">Back to Blog</h3>     
            <Link to="/Blog" className="nav-item">
              <img className="img" src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG87.png " alt=""/>  
            </Link>       
            <h3 className="">Login into your Account</h3>
              <form className="form text-center" onSubmit={handleSubmit}>
                <input   
                  className=" input form-control m-2"
                  type='email'
                  placeholder='Email'
                  name='email'
                  ref={userRef}
                />
                <input
                  className=" input form-control m-2"
                  type='password'
                  placeholder='Password'
                  name='password'
                  ref={passwordRef}
                />
              <div className="container"> 
                <button className="w-100 btn btn-md" type="submit" disabled={isFetching}> Login</button>
              </div>
                <p className="mt-5 mb-3 par">&copy; Blogging demo, 2021</p>
              </form>
                <p className="par">
                 <Link className='nav-link' to="/Signup">Sign Up</Link>
                </p>
            </div>

        </>
    )
}
