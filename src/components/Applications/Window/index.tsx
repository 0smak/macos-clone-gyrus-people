import { Resizable } from "re-resizable";
import Draggable from "react-draggable";
import { APPLICATION_STATUS } from "../../../enums/applicationStatus";
import { useDrag } from "../../../hooks/useDrag";
import { useResizable } from "../../../hooks/useResizable";
import { useWindowState } from "../../../hooks/useWindowState";
import { delay } from "../../../utils/delay";
import "./window.scss";
import { WindowActionButtons } from "./WindowActionButtons";

export const Window = (props: any) => {
	const { width, setWidth, height, setHeight } = useResizable(
		...(props.defaultSize as [number, number])
	);
	const getRandomPosition = () => {
		const appsArea = document.querySelector("#apps-area") as HTMLElement;
		if (!appsArea) return { x: 0, y: 0 };
		const areaHeight = appsArea.clientHeight;
		const areaWidth = appsArea.clientWidth;
		const x = (areaWidth - width) / 2;
		const y = (areaHeight - height) / 2;
		return { x, y };
	};
	const randomPosition = getRandomPosition();
	const { windowState, setWindowState } = useWindowState(props.status);
	const { position, setPosition } = useDrag(randomPosition.x, randomPosition.y);

	const windowStateClass = () => {
		switch (windowState) {
			case APPLICATION_STATUS.MAXIMIZED:
				return "application-window--maximized";
			case APPLICATION_STATUS.MINIMIZED:
				return "application-window--minimized";
			default:
				return "";
		}
	};

	const handleMaximize = () => {
		const { clientWidth, clientHeight } =
			(document.querySelector("#apps-area") as HTMLElement) ?? {};
		if (
			windowState === APPLICATION_STATUS.MAXIMIZED ||
			(clientWidth <= width &&
				clientHeight <= height &&
				windowState === APPLICATION_STATUS.OPEN)
		) {
			setPosition(randomPosition);
			setWidth(500);
			setHeight(400);
		} else {
			setPosition({ x: 0, y: 0 });
			setWidth(clientWidth);
			setHeight(clientHeight);
		}
	};

	const handleDrag = (_: any, data: any) => {
		if (windowState === APPLICATION_STATUS.MAXIMIZED)
			handleStatusChanged(APPLICATION_STATUS.OPEN);
		setPosition({ x: data.x, y: data.y });
	};

	const handleStatusChanged = (status: APPLICATION_STATUS) => {
		if (status === APPLICATION_STATUS.MAXIMIZED) handleMaximize();
		setWindowState(status);
		props.onStatusChanged(props.id, status);
	};

	const handleMouseDown = () => {
		if (windowState !== APPLICATION_STATUS.MINIMIZED)
			props.setFrontMost(props.id);
	};

	return (
		<Draggable
			defaultPosition={randomPosition}
			position={position}
			onDrag={handleDrag}
			handle=".draggable-handler"
			defaultClassName={`draggable ${
				props?.isFrontMost ? "draggable--frontmost" : ""
			}`}
			onMouseDown={handleMouseDown}
		>
			<Resizable
				size={{ width, height }}
				onResizeStop={async (_, __, ___, d) => {
					setWidth(width + d.width);
					setHeight(height + d.height);
					await delay(0);
					setPosition({ ...position });
				}}
				minHeight={props?.minHeight ?? 400}
				minWidth={props?.minWidth ?? 400}
			>
				<div className={`application-window ${windowStateClass()}`}>
					<div className="application-window__actions">
						<WindowActionButtons onStatusChanged={handleStatusChanged} />
					</div>
					{props.children}
				</div>
			</Resizable>
		</Draggable>
	);
};
