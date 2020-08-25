import React from "react";
import constants from "../../env/constant";

const LeaderComponent = ({ options, handleScore }) => {
  const handleScoreUpdation = (data, type, elem) => {
    if (type === "plus") {
      let score = data.score + constants.scoreUpdatedBY;
      handleScore({ score, id: data.id });
    } else {
      let score =
        data.score >= constants.scoreUpdatedBY
          ? data.score - constants.scoreUpdatedBY
          : data.score;
      handleScore({ score, id: data.id });
    }
  };
  return (
    <div className="leader">
      <div className="leader-name"> {options.leaderName} </div>
      <div className="leader-buttons">
        <button
          className="plus-icon"
          onClick={handleScoreUpdation.bind(this, options, "plus")}
        >
          {" "}
        </button>{" "}
        <button
          className="minus-icon"
          onClick={handleScoreUpdation.bind(this, options, "minus")}
        >
          {" "}
        </button>{" "}
      </div>
      <div className="leader-score">
        {" "}
        <label>{options.score}</label>{" "}
      </div>
    </div>
  );
};
export default LeaderComponent;
