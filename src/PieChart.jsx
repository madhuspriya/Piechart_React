import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Paper } from "@mui/material";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {

//   labels: [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ],
//   datasets: [
//     {
//       label: ["WEEKLY"],
//       data: [30, 20, 50, 20, 90, 10, 20],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//         "rgba(210, 19, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//         "rgba(210, 19, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const PieChart = () => {
  const labelForWeek = [
    "Monday 19-12-2022",
    "Tuesday 20-12-2022",
    "Wednesday 21-12-2022",
    "Thursday 22-12-2022",
    "Friday 23-12-2022",
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
  const [role, setRole] = useState("Customer");

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

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(210, 19, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(210, 19, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Paper
        elevation={8}
        style={{ width: "400px", height: "390px", padding: "50px" }}
      >
        <div className="dropDown">
          <select
            value={state}
            onChange={handleChange}
            style={{
              padding: "8px",
              borderRadius: "20px",
              backgroundColor: "rgb(191 227 255)",
              border: "none",
              float: "right",
              marginLeft: "5px",
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
        </div>

        <Pie data={data} style={{ width: "350px", height: "450px" }} />
      </Paper>
    </div>
  );
};

export default PieChart;
