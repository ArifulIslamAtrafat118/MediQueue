import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen  bg-[url('/src/assets/MediQueuelogo.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="hero-overlay min-h-screen px-4 w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
        <h2 className="text-2xl font-semibold text-white mt-4">Page Not Found</h2>
        <p className="text-white mt-2 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved. 
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Back to Home
        </Link>
      </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ErrorPage;
