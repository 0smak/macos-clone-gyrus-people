import { useEffect, useState } from "react";
import { APPLICATION_STATUS } from "../enums/applicationStatus";

export const useWindowState = (status: APPLICATION_STATUS) => {
	const [windowState, setWindowState] = useState(status);
	useEffect(() => {
		setWindowState(status);
	}, [status]);
	return { windowState, setWindowState };
};
