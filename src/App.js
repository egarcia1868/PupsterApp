import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";


const App = () => {
  const [currentPage, setCurrentPage] = useState()
  
  const handlePageChange = (page) => {
    setCurrentPage({ page })
  }
  return (
      <Router>
        <div>
          <NavTabs 
            handlePageChange={handlePageChange}
            currentPage ={currentPage}
          />
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/discover" component={Discover}/>
          <Route exact path="/search" component={Search}/>
        </div>
      </Router>
  )
};

export default App;