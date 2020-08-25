import React, { useState } from "react";
import LeaderComponent from "./LeaderComponent";
import { apiRequest } from "../../services/ApiService";
import constants from "../../env/constant";
import "./leaderboard.scss";

const LeaderBoard = ({ leaderDetails }) => {
  const [leaderData, setLeaderData] = useState(leaderDetails);
  const handleScore = msg => {
    let updateLeaderData = getScores(msg);
    // put request
    let param = {
      method: "PUT",
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json"
      }
    };
    apiRequest(`${constants.API_URL}/update`, param)
      .then(response => response.json())
      .then(data => {
        if (data) {
          updateLeaderData.sort((a, b) => b.score - a.score);
          setLeaderData(updateLeaderData);
        }
      })
      .catch(err => console.log(err));
  };
  const getScores = msg => {
    let updatedLeader = leaderData.map(element => {
      if (element.id === msg.id) element.score = msg.score;
      return element;
    });
    return updatedLeader;
  };
  return (
    <div className="leader-board-app">
      {leaderData.map((elem, index) => {
        return (
          <LeaderComponent
            key={elem.id}
            options={{
              leaderName: elem.leaderName,
              score: elem.score,
              id: elem.id
            }}
            handleScore={handleScore}
          />
        );
      })}
    </div>
  );
};

export default LeaderBoard;
