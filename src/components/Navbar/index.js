'use client';
import React from 'react'
// import { FaviconFile } from 'favicons';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Link from 'next/link';

export const Navbar = () => {
  useEffect(() => {
    // Initialize Bootstrap components
    // For example, initialize modals
    if(typeof window !== "undefined"){
      require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }
  }, []);
  return (
    <>
    <body>
    <div className='position-relative'>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand main-logo" href="/">Covid.19</Link>
    <button className="navbar-toggler hamburger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-5 gap-2 fw-bold">
        
        <Link href="/men" className="nav-item">
          Men
        </Link>
        <Link href="/women" className="nav-item">
          Women
        </Link>
        <Link href="/kids" className="nav-item">
          Kids
        </Link>
        <Link href="/blogs" className="nav-item">
          Blogs
        </Link>
        <Link href="/register" className="nav-item">
          Register
        </Link>
      </ul>
      
    </div>
  </div>
</nav>
{/* <footer>
  <div className='abc'>
    <h4>hellow im footer section</h4>
  </div>
</footer> */}
</div>
</body>
    </>
  )
}
