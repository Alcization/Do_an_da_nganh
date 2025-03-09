import React from "react";
import WeatherPage from "./weatherPage.jsx";
import ChartPage from "./chart.jsx";
import PieChartPage from "./piechart.jsx";
import './dashboard.css';
import Control from "./control.jsx";

const Dashboard = () => {
  return (
    <>


      {/* Bao bọc ChartPage và PieChartPage trong một container */}
      <div className="charts-row">
        <ChartPage />
        <PieChartPage />
        <Control />
      </div>
      {/* Phần WeatherPage vẫn nằm riêng phía trên */}
      <WeatherPage />
      
    </>
  );
}

export default Dashboard;


// import { useState, useEffect } from "react";

// const ADAFRUIT_USERNAME = "nhatnam1308";
// const FEED_KEY = "bbc-temp";
// const ADAFRUIT_API_KEY = "aio_KnNE17mpKp91gUsfTj29pP00orQ6";
// const API_URL = `https://io.adafruit.com/api/v2/${ADAFRUIT_USERNAME}/feeds/${FEED_KEY}/data?limit=10`;

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL, {
//           headers: {
//             "X-AIO-Key": ADAFRUIT_API_KEY,
//           },
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//         console.log(jsonData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

    // fetchData();
    // const interval = setInterval(fetchData, 5000);
    // return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         margin: "20px auto",
//         padding: "20px",
//         maxWidth: "400px",
//         textAlign: "center",
//         border: "1px solid #ccc",
//         borderRadius: "8px",
//         boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h2>Nhiệt độ từ Adafruit IO</h2>
//       {loading && <p>Đang tải...</p>}
//       {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
//       {data && data.length > 0 && (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {data.map((item, index) => (
//             <li key={index} style={{ marginBottom: "10px" }}>
//               Giá trị: {item.value}°C <br />
//               Thời gian: {new Date(item.created_at).toLocaleString()}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };


// export default Dashboard;
