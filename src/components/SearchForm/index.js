import React from "react";

const SearchForm = (props) => {
  
  return (
    <form style={{width: "100%"}} autoComplete="off">
      <div className="form-group autocomplete">
        <label htmlFor="search"><strong>Breed Name:</strong></label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="search"
        />
        <datalist id="breeds">
          {Object.keys(props.breeds).map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button style={{float: "right"}} onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchForm;