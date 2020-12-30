import React from "react";
import { Link } from "react-router-dom";

const NavTabs = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" 
        to="/about"
        onClick={() => props.handlePageChange("about")}
      >
        Pupster
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              onClick={() => props.handlePageChange("about")}
              className={
                props.currentPage === "/" || props.currentPage === "about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              onClick={() => props.handlePageChange("discover")}
              className={
                props.currentPage === "discover" ? "nav-link active" : "nav-link" }
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              onClick={() => props.handlePageChange("search")}
              className={
                props.currentPage === "search" ? "nav-link active" : "nav-link" }
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  //   <ul className="nav nav-tabs">
  //     <li className="navbar-brand" style={{paddingLeft:"1%"}}>
  // {/* I see repeated code here.  I believe I can simplify this later on  */}
  //       <a
  //         href="#about"
  //       >
  //         Pupster
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#about"
  //         className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
  //       >
  //         About
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#discover"
  //         className={props.currentPage === "Discover" ? "nav-link active" : "nav-link"}
  //       >
  //         Discover
  //       </a>
  //     </li>
  //     <li className="nav-item">
  //       <a
  //         href="#search"
  //         className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
  //       >
  //         Search
  //       </a>
  //     </li>
  //   </ul>
  )
}

export default NavTabs;