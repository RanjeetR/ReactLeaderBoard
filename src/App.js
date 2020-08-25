import React, { useEffect, useState } from "react";
import { apiRequest } from "./services/ApiService";
import constants from "./env/constant";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Loader from "./components/loader/Loader";

function App() {
  const [leaderDetails, setLeaderDetails] = useState([]);
  useEffect(() => {
    let param = {
      method: "get", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      }
    };
    apiRequest(`${constants.API_URL}/all`, param)
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => b.score - a.score);
        setLeaderDetails(data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      {leaderDetails && leaderDetails.length ? (
        <LeaderBoard leaderDetails={leaderDetails} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
