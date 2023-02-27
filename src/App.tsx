import { useState } from "react";
import "./App.scss";
import { Terminal as TerminalWindow } from "./components/Applications/Terminal";
import { Window } from "./components/Applications/Window";
import { Dock } from "./components/Dock";
import { DockIcon } from "./components/Dock/DockIcon/Index";
import { FileIcon } from "./components/FileIcon";
import { MainScreen } from "./components/MainScreen";
import { Menubar } from "./components/Menubar";
import {
	Bin,
	Finder,
	GitHub,
	Music,
	Photoshop,
	Terminal,
	Weather,
} from "./constants/applications";
import { APPLICATION_STATUS } from "./enums/applicationStatus";
import { IApplication } from "./interfaces/dockIcon";

function App() {
	const applications: IApplication[] = [
		{
			...Finder,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...Terminal,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...Weather,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...Music,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...Photoshop,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...GitHub,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{ type: "separator", id: "separator-1" },
		{
			...Bin,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
	];

	const [apps, setApps] = useState(applications);

	const setApplicationStatus = (id: string, status: APPLICATION_STATUS) => {
		const app = apps.find((app: IApplication) => app.id === id);
		if (app) app.status = status;
		setApps([...apps]);
	};

	const isWindowOpen = ({ type, status }: IApplication) => {
		return type === "app" && status !== APPLICATION_STATUS.CLOSED;
	};

	return (
		<div className="macos">
			<Menubar />
			<MainScreen>
				<section id="apps-area" className="applications-area">
					{apps.map(
						(app: IApplication) =>
							isWindowOpen(app) && (
								<Window
									key={app.id}
									id={app.id}
									status={app.status}
									onStatusChanged={setApplicationStatus}
								>
									{app.id === "iterm2" && <TerminalWindow {...app} />}
								</Window>
							)
					)}
				</section>
				<section className="icons-grid">
					<FileIcon {...{ ...Terminal, name: "whoami" }} />
				</section>
			</MainScreen>
			<Dock>
				{apps.map((app: IApplication) => (
					<DockIcon {...app} onOpenApp={setApplicationStatus} key={app.id} />
				))}
			</Dock>
		</div>
	);
}

export default App;
