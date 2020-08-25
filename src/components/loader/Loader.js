import React from "react";
import "./loader.css";
const Loader = () => {
  const style = {
    position: "absolute",
    margin: "auto",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100px",
    height: "100px",
    borderRadius: "3px"
  };
  return (
    <div style={style}>
      <div className="load-wrapp">
        <div className="load-3">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
