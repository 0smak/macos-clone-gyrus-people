import { useEffect, useState } from "react";

export const useResizable = (_width: number, _height: number) => {
	const [width, setWidth] = useState(_width);
	const [height, setHeight] = useState(_height);
	useEffect(() => {
		setWidth(_width);
		setHeight(_height);
	}, [_width, _height]);
	return { width, height, setWidth, setHeight };
};
