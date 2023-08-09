import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Sidebar from "../../components/PhysiotherapistSidebar";
import Navbar from "../../components/PhysiotherapistNavbar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/member/ScheduleStyles.css";
import PhysiotherapistDashboard from "./Dashboard";

const PhysiotherapistSchedule = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currYear, setCurrYear] = useState(currentDate.getFullYear());
	const [currMonth, setCurrMonth] = useState(currentDate.getMonth());

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const renderCalendar = () => {
		const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
		const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
		const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
		const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
		const days = [];

		for (let i = firstDayofMonth; i > 0; i--) {
			days.push(
				<li key={`prev-${i}`} className="inactive">
					{lastDateofLastMonth - i + 1}
				</li>
			);
		}

		for (let i = 1; i <= lastDateofMonth; i++) {
			const isToday =
				i === currentDate.getDate() &&
				currMonth === currentDate.getMonth() &&
				currYear === currentDate.getFullYear();
			days.push(
				<li key={`current-${i}`} className={isToday ? "active" : ""}>
					{i}
				</li>
			);
		}

		for (let i = lastDayofMonth; i < 6; i++) {
			days.push(
				<li key={`next-${i}`} className="inactive">
					{i - lastDayofMonth + 1}
				</li>
			);
		}

		return days;
	};

	const handlePrevNextClick = (iconId) => {
		let newMonth = currMonth;
		let newYear = currYear;

		if (iconId === "prev") {
			newMonth = currMonth - 1;
			if (newMonth < 0) {
				newMonth = 11;
				newYear = currYear - 1;
			}
		} else {
			newMonth = currMonth + 1;
			if (newMonth > 11) {
				newMonth = 0;
				newYear = currYear + 1;
			}
		}
		setCurrMonth(newMonth);
		setCurrYear(newYear);
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
						Schedule
					</Typography>
					<Box sx={{marginTop:"4%"}}>
						<Box sx={{ width: "50%", justifyContent: "center" }}>
							<div className="wrapper">
								<header>

									<div className="icons">
										<p className="current-date">
											{`${months[currMonth]} ${currYear}`}
										</p>
										<span
											id="prev"
											className="material-symbols-rounded"
											onClick={() => handlePrevNextClick("prev")}
										>
                      <FaChevronLeft />
                    </span>

										<span
											id="next"
											className="material-symbols-rounded"
											onClick={() => handlePrevNextClick("next")}
										>
                      <FaChevronRight />
                    </span>
									</div>
								</header>
								<div className="calendar">
									<ul className="weeks">
										<li>Sun</li>
										<li>Mon</li>
										<li>Tue</li>
										<li>Wed</li>
										<li>Thu</li>
										<li>Fri</li>
										<li>Sat</li>
									</ul>
									<ul className="days">{renderCalendar()}</ul>
								</div>
							</div>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PhysiotherapistSchedule;
