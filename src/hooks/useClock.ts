import { useEffect, useState } from "react";
import { dateToTime } from "../utils/time";

export const useClock = () => {
	const [date, setDate] = useState(new Date());

	const refreshDate = () => {
		setDate(new Date());
	};

	useEffect(() => {
		const timerId = setInterval(refreshDate, 1000);
		return () => clearInterval(timerId);
	}, []);

	return dateToTime(date);
};
