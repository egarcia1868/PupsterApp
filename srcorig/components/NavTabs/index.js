import React from "react";

const NavTabs = (props) => {
  return (
    <ul className="nav nav-tabs">
      <li className="navbar-brand" style={{paddingLeft:"1%"}}>
  {/* I see repeated code here.  I believe I can simplify this later on  */}
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
        >
          Pupster
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#discover"
          onClick={() => props.handlePageChange("Discover")}
          className={props.currentPage === "Discover" ? "nav-link active" : "nav-link"}
        >
          Discover
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#search"
          onClick={() => props.handlePageChange("Search")}
          className={props.currentPage === "Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </a>
      </li>
    </ul>
  )
}

export default NavTabs;