import React from "react";

const SearchResults = (props) => {
  return (
    <ul style={{marginTop:"2%"}} className="list-group search-results text-center">
      {props.searchResults.map( dog =>
        <li className="list-group-item" key={dog}>
          <img style={{maxWidth: "100%"}} src={dog} alt="" />
        </li>
      )}
    </ul>
  )
}

export default SearchResults