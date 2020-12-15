import React from "react";

const PupCard = (props) => {
  return (
    <div className="card" style={{backgroundImage: `url(${props.currentPup})`}}>
      <button onClick={props.handlePupChange} className="card-btn pass" data-value="pass" style={{opacity: 1}}></button>
      <button onClick={props.handleMatchMaking} className="card-btn pick" data-value="pick" style={{opacity: 1}}></button>
    </div>
  )
}

export default PupCard;