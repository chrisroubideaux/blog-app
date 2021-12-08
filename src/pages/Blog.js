
import { Helmet } from 'react-helmet';


import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Sidebar from "../components/Sidebar";
import Footer from '../components/Footer';

export default function Blog() {
 




    return (

        <>
        <Helmet>
          <title>Blog</title>
            <meta
              name='description'
              content='Blog-page'
            />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap" rel="stylesheet"></link>
            </Helmet>
            <div className=" blog">
              <Navbar/>
              <Header/>
              <Posts/>
              <Sidebar />
              <Footer/>
            </div>
        </>
    )
}
