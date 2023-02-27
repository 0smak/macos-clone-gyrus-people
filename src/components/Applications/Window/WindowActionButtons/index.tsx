import { APPLICATION_STATUS } from "../../../../enums/applicationStatus";
import "./window-action-buttons.scss";

export const WindowActionButtons = (props: any) => {
	return (
		<div className="window-action-buttons">
			<button
				onClick={() => props.onStatusChanged(APPLICATION_STATUS.CLOSED)}
				className="window-action-buttons__button"
			></button>
			<button
				onClick={() => props.onStatusChanged(APPLICATION_STATUS.MINIMIZED)}
				className="window-action-buttons__button"
			></button>
			<button
				onClick={() => props.onStatusChanged(APPLICATION_STATUS.MAXIMIZED)}
				className="window-action-buttons__button"
			></button>
		</div>
	);
};
