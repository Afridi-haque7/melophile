import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://image.winudf.com/v2/image/Z29sZGRldi50ZWFtLm11c2ljLnBsYXllcl9pY29uXzE1MzExMTMyMThfMDcz/icon.png?w=&fakeurl=1" alt="" className="head-logo"/>  Melophile
          </Link>

          <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/github">
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
  );
}

export default Navbar;
