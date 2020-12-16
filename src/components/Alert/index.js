import React from "react";

const MatchAlert = (props) => {
  return (
    <div className={`alert alert-${props.type} fade in`} style={{ width: "80%", margin: "18px auto 0px", ...props.style }}>
      {props.children}
    </div>
  )
}

export default MatchAlert;