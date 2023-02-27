import { useEffect, useState } from "react";

export const useDrag = (x: number, y: number) => {
	const [position, setPosition] = useState({ x, y });
	useEffect(() => {
		setPosition({ x, y });
	}, [x, y]);
	return { position, setPosition };
};
