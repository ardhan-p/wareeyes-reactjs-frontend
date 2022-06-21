import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Chart from '../../Components/Chart/Chart'
import { Topic1, Topic2, Topic3, Topic4 } from "../../Components/Data/Data";
import './Dashboard.css'

function Dashboard() {
  const [topic1, topic2, setUserData] = useState({
    labels: Topic1.map((data) => data.month,
            ),
    datasets: [
      {
        label: "Data 1",
        data: Topic1.map((data) => data.topicGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "Data 2",
        data: Topic2.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
    options:{
      responsive: true,
      scales: {
          y: {
              beginAtZero: true,
          }
      }} 
  });

  const [ topic3 ] = useState({
    labels: Topic3.map((data) => data.month),
    datasets: [
      {
        label: "Data 3",
        data: Topic3.map((data) => data.Topic3),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const [ topic4 ] = useState({
    labels: Topic4.map((data) => data.year),
    datasets: [
      {
        label: "Data 3",
        data: Topic4.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "orange",
        borderWidth: 2,
      },
    ],
  });

  const [ topic5 ] = useState({
    labels: Topic4.map((data) => data.year),
    datasets: [
      {
        label: "Data 3",
        data: Topic4.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "purple",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="main-dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <Navbar />
        <div className="welcome-msg">Welcome user!</div>
        <div className="charts">
          <div className="charts-col1">
          <Chart chartData={topic1} />
          </div>
          <div className="charts-col2">
          <Chart chartData={topic3} />
          </div>
        </div>
        <div className="charts">
          <div className="charts-col1">
          <Chart chartData={topic4} />
          </div>
          <div className="charts-col2">
          <Chart chartData={topic5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard