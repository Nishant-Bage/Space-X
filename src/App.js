import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function App () {

//   https://api.spaceXdata.com/v3/launches?limit=100
//  Launch Success Filter: https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true
//  Launch & Land Filter:
//  https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true
// https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

  const [ cardData, setCardData ] = useState([])
  
  
  const baseApi = "https://api.spaceXdata.com/v3/launches"

  useEffect(() => {
    let url = baseApi + `?limit=16`
    axios.get(url)
      .then((response) => {
        const res = response.data
        setCardData(res)
      })
      .catch(function (error) {
        console.log(error);
      })
    },[])
    
  const renderCards = cardData.map((item) => {
      return <Card data={item} />
    })
  
  
  
  return (
    <div className="App">
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <div className="flex-container">
        <section className="filter">
          <div className="filter-heading">
            <h1>Filters</h1>
          </div>
          <div className="launch-date">
            <div className="filter-button-heading">
              <h4>Launch Year</h4>
              <hr />
            </div>
          </div>
          <div className="success-launch">
          <div className="filter-button-heading">
              <h4>Successful Launch</h4>
              <hr />
            </div>
          </div>
          <div className="success-landing">
          <div className="filter-button-heading">
              <h4>Successful Landing</h4>
              <hr />
            </div>
          </div>
        </section>
        <section className="cards-container">
          {renderCards}
        </section>
      </div>
      <footer>
        <div className="footer-info">
          <h3><b>Developed by</b> : NISHANT BAGE</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
