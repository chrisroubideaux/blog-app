import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import '../styles/Forms.css'

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
 }
};

    return (
        <>
        <Helmet>
          <title>Sign up</title>
            <meta
              name='description'
              content='Signup-page'
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
          </Helmet>
          <div className="forms text-center py-5">
            <h3>Back to Blog</h3>   
            <Link to="/Blog" className="nav-item">
              <img className="img" src="http://pngimg.com/uploads/paper_plane/paper_plane_PNG87.png " alt=""/>   
            </Link>
            <h3 className="">Please Create an account</h3>
              <form className="form text-center" onSubmit={handleSubmit}>
                <input 
                  className="input form-control m-2"
                  type='text'
                  placeholder='Name'
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                  className="input form-control m-2"
                  type='email'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />              
                <input
                 className="input form-control m-2"
                 type='password'
                 placeholder='Password'
                 onChange={(e) => setPassword(e.target.value)}
                />
              <div className="container"> 
                <button className="w-100 btn btn-md" type="submit">Sign up</button>
              </div>
              <p className="mt-3 mb-3 par">&copy; Blogging demo, 2021</p>
              </form>
              <p className="par mb-3">
                Already have an account? <Link className='nav-link' to="/Login"> Login</Link>
              </p>
              {error && <p className="error">Error signing up</p>}
          </div>
        </>
    );
};