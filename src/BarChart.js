import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import { faker } from "@faker-js/faker";
  import { useEffect, useState } from "react";
  import { Paper, Typography } from "@mui/material";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
const BarChart = () => {
    const labelForWeek = [
        "Monday 19-12-2022",
        "Tuesday 20-12-2022",
        "Wednesday 21-12-2022",
        "Thursday 22-12-2022",
        "Friday 23-12-2022" ,
        "Saturday 24-12-2022",
        "Sunday 25-12-2022",
      ];
      const labelsForMonth = [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
      ];
      const labelsForYear = [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ];
      const [state, setState] = useState("weekly");
      const [labels, setLabel] = useState(labelForWeek);
      const [role,setRole] = useState("Customer");
    
      const handleChange = (e) => {
        setState(e.target.value);
      };
      
      const handleRole = (e) => {
       setRole(e.target.value);
      };

      useEffect(() => {
        console.log(state);
        switch (state) {
          case "monthly":
            setLabel(labelsForMonth);
            break;
          case "weekly":
            setLabel(labelForWeek);
            break;
          case "yearly":
            setLabel(labelsForYear);
            break;
          default:
            break;
        }
      }, [state]);

      const data = {
        labels,
        datasets: [
          {
            label:
              state === "monthly"
                ? "Monthly"
                : state === "weekly"
                ? "Weekly"
                : "Yearly",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor:
              state === "monthly"
                ? "rgba(11, 127, 171, 0.6)"
                : state === "weekly"
                ? "rgba(245, 140, 166, 0.5)"
                : "rgba(255, 0, 160, 0.4)",
          },
        ],
      };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "60px 0px",
      }}
    >
      <Paper elevation={8} style={{ width: "720px", padding: "20px" }}>
        <Typography variant="h6" style={{ fontSize: "30px", color: "gray" }}>
          Sales
        </Typography>
        <select
          value={state}
          onChange={handleChange}
          style={{
            padding: "8px",
            borderRadius: "20px",
            backgroundColor: "rgb(191 227 255)",
            border: "none",
            float: "right",
            marginLeft:"5px"
          }}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthtly</option>
          <option value="yearly">Yearly</option>
        </select>
        <select
          value={role}
          onChange={handleRole}
          style={{
            padding: "8px",
            borderRadius: "20px",
            backgroundColor: "rgb(191 227 255)",
            border: "none",
            float: "right",
          }}
        >
          <option value="Customer">Customer</option>
          <option value="Department">Department</option>
          <option value="Category">Category</option>
        </select>

        <Bar options={options} data={data} style={{ fontSize: "20px" }} />
      </Paper>
    </div>
  )
}

export default BarChart
