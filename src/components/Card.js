import React from "react";
import road from "../images/road.jpg";

function Card(props) {
  const card = props.data;
  return (
    <div className="cards">
      <div className="card-content">
        <div className="card-img">
          <img src={road} alt="road" width="150px" height="170px" />
        </div>
        <div className="card-title">
          <h2>
            {card.mission_name} #{card.flight_number}
          </h2>
        </div>
        <div className="card-info">
          <h3>Mission Ids:</h3>
                  <ul className="mission-id">
                  { card.mission_id.map((event) => {
              return <li>event</li>
          })}
            </ul>
          <h3>Launch year:{card.launch_year}</h3>
          <h3>Successful Launch: {card.launch_success? "true" : "false"}</h3>
          {/* <h3>Succesful Landing: {card.}</h3> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
