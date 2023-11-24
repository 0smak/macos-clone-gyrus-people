import "./dock-icon.scss";
import { IApplication } from "../../../interfaces/dockIcon";
import { APPLICATION_STATUS } from "../../../enums/applicationStatus";

export const DockIcon = (props: Partial<IApplication | any>) => {
	const { icon, name, status, type, id } = props;
	const app = (
		<button
			className="dock-icon-container"
			onClick={(_) => props.onOpenApp(id, APPLICATION_STATUS.OPEN)}
		>
			<img
				className="dock-icon"
				srcSet={`${location.pathname + icon}.webp, ${
					location.pathname + icon
				}.png`}
				src={location.pathname + icon + ".png"}
				alt={name}
			/>
		</button>
	);
	const separator = <div className="separator"></div>;

	return type === "app" || type === "url" ? app : separator;
};
