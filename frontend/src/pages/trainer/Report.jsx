import { React, useState } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import Sidebar from "../../components/TrainerSidebar";
import Navbar from "../../components/TrainerNavbar";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const color1 = "#102B4C"; //dark blue
const color2 = "#346E93"; //light blue
const color3 = "#96CDEF"; //lighter blue
const color4 = "#DC1E2A"; //red

const Reports = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "Sales",
        data: [
          5, 2, 3, 1, 4, 2, 3, 1, 2, 0, 1, 1, 2, 1, 3, 0, 4, 1, 2, 5, 4, 3, 1,
          2, 0, 1, 2, 3, 0, 0, 1,
        ],
        backgroundColor: [
          `${color1}`,
          `${color3}`,
          `${color4}`,
          `${color2}`,
          `${color1}`,
          `${color3}`,
          `${color4}`,
        ],
        borderColor: [
          `${color1}`,
          `${color3}`,
          `${color4}`,
          `${color2}`,
          `${color1}`,
          `${color3}`,
          `${color4}`,
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const selectStyle = {
    marginBottom: "2rem",
    color: "black",
    backgroundColor: "lightgray",
    width: "10rem",
    height: "3rem",
  };

  return (
    <Box sx={{ flex: "1", display: "flex", mb: 2 }}>
      <Box>
        <Sidebar />
      </Box>

      <Box component="main" sx={{ flex: 1 }}>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ paddingLeft: "5rem", flex: 1 }}>
          <Typography
            variant="h3"
            style={{ fontWeight: 700, marginTop: "1rem", textAlign: "left" }}
          >
            Reports
          </Typography>

          <Box
            sx={{
              display: "flex",
              width: "95%",
              height: "60%",
              backgroundColor: "#E5E8E8",
              padding: "0.8rem",
              borderRadius: "10px",
              marginBottom: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <Box
              sx={{
                width: "75%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  fontWeight: 700,
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                Monthly Session Overview
              </Typography>
              <Box sx={{}}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "25%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      Scheduled <br /> Sessions{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      35{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "26%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      Completed <br />
                      Sessions{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      33{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "25%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      Cancelled <br /> Sessions{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      02{" "}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "25%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      New <br />
                      Requests{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      10{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "26%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      Accepted <br />
                      Requests{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      9{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#E5E8E8",
                      padding: "0.7rem",
                      borderRadius: "10px",
                      margin: "1rem",
                      width: "25%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      Average Session <br />
                      Duration{" "}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        fontWeight: 600,
                        marginTop: "1rem",
                        textAlign: "center",
                      }}
                    >
                      150hrs{" "}
                    </Typography>
                  </Box>
                </Box>
                <Box padding="20px">
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 10, label: "Series A" },
                          { id: 1, value: 15, label: "series B" },
                          { id: 2, value: 20, label: "series C" },
                          { id: 3, value: 20, label: "series D" },
                        ],
                      },
                    ]}
                    width={400}
                    height={200}
                  />

                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    width={500}
                    height={300}
                  />
                </Box>
              </Box>
              <Box>
                <Bar
                  data={data}
                  options={options}
                  style={{ padding: "4rem" }}
                />
              </Box>
            </Box>
            <Box sx={{ width: "25%", height: "100%", marginLeft: "5%" }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedYear}
                  label="Year"
                  onChange={handleYearChange}
                  style={selectStyle}
                >
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                </Select>
              </FormControl>

              <br />
              <FormControl>
                <InputLabel htmlFor="month-select">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedMonth}
                  label="Month"
                  onChange={handleMonthChange}
                  style={selectStyle}
                >
                  <MenuItem value="January">January</MenuItem>
                  <MenuItem value="February">February</MenuItem>
                  <MenuItem value="March">March</MenuItem>
                  <MenuItem value="April">April</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="June">June</MenuItem>
                  <MenuItem value="July">July</MenuItem>
                  <MenuItem value="August">August</MenuItem>
                  <MenuItem value="September">September</MenuItem>
                  <MenuItem value="October">October</MenuItem>
                  <MenuItem value="November">November</MenuItem>
                  <MenuItem value="December">December</MenuItem>
                </Select>
              </FormControl>
              <br />

              <Button variant="contained" style={{ marginTop: "70rem" }}>
                Contained
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reports;
