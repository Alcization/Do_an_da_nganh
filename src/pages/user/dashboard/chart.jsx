// src/pages/Chart.jsx
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './chart.css';

// Đăng ký các thành phần cho Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Thông tin Adafruit IO
const ADAFRUIT_USERNAME = "nhatnam1308";
const ADAFRUIT_API_KEY = "aio_KnNE17mpKp91gUsfTj29pP00orQ6";

// Các feed keys
const FEED_TEMP = "bbc-temp";
const FEED_HUMID_AIR = "bbc-humid-air";
const FEED_HUMID_SOIL = "bbc-humid-soil";
const FEED_LIGHT = "light";

function ChartPage() {
  const [tempData, setTempData] = useState([]);
  const [humidAirData, setHumidAirData] = useState([]);
  const [humidSoilData, setHumidSoilData] = useState([]);
  const [lightData, setLightData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm fetch dữ liệu từ Adafruit IO
  const fetchFeedData = async (feedKey, setter) => {
    try {
      const url = `https://io.adafruit.com/api/v2/${ADAFRUIT_USERNAME}/feeds/${feedKey}/data?limit=10`;
      const response = await fetch(url, {
        headers: {
          'X-AIO-Key': ADAFRUIT_API_KEY,
        },
      });
      const data = await response.json();
      // data là mảng các bản ghi, mỗi bản ghi có field "value"
      // Ta parse float và reverse() để giá trị cũ hơn nằm bên trái
      const values = data.map(item => parseFloat(item.value)).reverse();
      setter(values);
    } catch (error) {
      console.error(`Lỗi khi fetch feed ${feedKey}:`, error);
      setter([]);
    }
  };

  // useEffect để fetch cả 4 feed khi component mount
  useEffect(() => {
    async function fetchAll() {
      await Promise.all([
        fetchFeedData(FEED_TEMP, setTempData),
        fetchFeedData(FEED_HUMID_AIR, setHumidAirData),
        fetchFeedData(FEED_HUMID_SOIL, setHumidSoilData),
        fetchFeedData(FEED_LIGHT, setLightData),
      ]);
      setLoading(false);
    }
    fetchAll();
    // const interval = setInterval(fetchAll, 5000);
    // return () => clearInterval(interval);
  }, []);

  // Nếu đang tải dữ liệu
  if (loading) {
    return <div className="chart-container">Đang tải dữ liệu biểu đồ...</div>;
  }

  // Tạo nhãn (labels) đơn giản từ 1 đến 10 (hoặc có thể là thời gian)
  const labels = Array.from({ length: 10 }, (_, i) => i + 1);

  // Chuẩn bị data cho chart
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Nhiệt độ',
        data: tempData,
        borderColor: 'red',
        backgroundColor: 'red',
        tension: 0.3, // bo tròn line
      },
      {
        label: 'Độ ẩm không khí',
        data: humidAirData,
        borderColor: 'blue',
        backgroundColor: 'blue',
        tension: 0.3,
      },
      {
        label: 'Độ ẩm đất',
        data: humidSoilData,
        borderColor: 'green',
        backgroundColor: 'green',
        tension: 0.3,
      },
      {
        label: 'Cường độ ánh sáng',
        data: lightData,
        borderColor: 'orange',
        backgroundColor: 'orange',
        tension: 0.3,
      },
    ],
  };

  // Tuỳ chọn cho biểu đồ (Chart.js options)
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        suggestedMin: 0,  // hoặc tuỳ ý
        suggestedMax: 100, 
        grid: {
          color: '#000000',  // màu lưới
        },
        ticks: {
          color: '#000000',  // màu chữ trên trục
        },
      },
      x: {
        grid: {
          color: '#000000',
        },
        ticks: {
          color: '#000000',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Biểu đồ dữ liệu cảm biến</h2>
      <div className="chart-wrapper">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartPage;
