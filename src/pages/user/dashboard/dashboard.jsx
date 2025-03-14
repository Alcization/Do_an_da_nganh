import React from "react";
import WeatherPage from "./weatherPage.jsx";
import ChartPage from "./chart.jsx";
import PieChartPage from "./piechart.jsx";
import './dashboard.css';
import Control from "./control.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="charts-row">
        <ChartPage />
        <PieChartPage />  
      </div>
      <div className="charts-row">
        <Control />
        <WeatherPage />
      </div> 
    </>
  );
}

export default Dashboard;