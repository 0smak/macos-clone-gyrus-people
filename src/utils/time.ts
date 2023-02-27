export const dateToTime = (date: Date) => {
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	][date.getMonth()];
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
		date.getDay()
	];
	return `${dayOfWeek} ${day} ${month}\u00A0\u00A0${twoDigits(
		hours
	)}:${twoDigits(minutes)}`;
};

const twoDigits = (number: number) => {
	return number < 10 ? `0${number}` : number;
};
