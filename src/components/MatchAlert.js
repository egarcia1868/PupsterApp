import React from "react";

const MatchAlert = (props) => {

  const alertStyle = {
    width: "80%", margin: "18px auto 0px", opacity: props.visible
  }

  return (
    <div className="alert alert-success fade in" style={alertStyle}>Yay! That Pup Liked You Too!!!</div>
  )
}

export default MatchAlert;