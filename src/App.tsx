import { useState } from "react";
import "./App.scss";
import { FinderWindow } from "./components/Applications/Finder";
import { PhotoshopWindow } from "./components/Applications/Photoshop";
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
	Photoshop,
	Terminal,
} from "./constants/applications";
import { APPLICATION_STATUS } from "./enums/applicationStatus";
import { IApplication } from "./interfaces/dockIcon";

function App() {
	const applications: IApplication[] = [
		{
			...Finder,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
			defaultSize: [900, 650],
			minWidth: 700,
			minHeight: 500,
		},
		{
			...Terminal,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
		},
		{
			...Photoshop,
			type: "app",
			status: APPLICATION_STATUS.CLOSED,
			defaultSize: [900, 650],
			minWidth: 700,
			minHeight: 500,
		},
		{
			...GitHub,
			type: "url",
			url: "https://github.com/0smak/macos-clone-gyrus-people",
			status: APPLICATION_STATUS.CLOSED,
		},
		{ type: "separator", id: "separator-1" },
		{
			...Bin,
			type: "url",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
			status: APPLICATION_STATUS.CLOSED,
		},
	];

	const [apps, setApps] = useState(applications);

	const setApplicationStatus = (id: string, status: APPLICATION_STATUS) => {
		const app = apps.find((app: IApplication) => app.id === id);
		apps.map((app: IApplication) => (app.isFrontMost = app.id === id));
		if (app) {
			if (app.type === "url") {
				window.open(app.url, "_blank");
				return;
			} else {
				app.status = status;
			}
		}
		setApps([...apps]);
	};

	const isWindowOpen = ({ type, status }: IApplication) =>
		type === "app" && status !== APPLICATION_STATUS.CLOSED;

	const setFrontMost = (id: string) => {
		setApps(
			apps.map((app: IApplication) => {
				if (app.id === id) {
					app.status = APPLICATION_STATUS.OPEN;
				}
				app.isFrontMost = app.id === id;
				return app;
			})
		);
	};

	return (
		<>
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
										defaultSize={app.defaultSize ?? [500, 400]}
										isFrontMost={app.isFrontMost}
										onStatusChanged={setApplicationStatus}
										setFrontMost={setFrontMost}
										minWidth={app.minWidth}
										minHeight={app.minHeight}
									>
										{app.id === "iterm2" && <TerminalWindow {...app} />}
										{app.id === "finder" && <FinderWindow {...app} />}
										{app.id === "photoshop" && <PhotoshopWindow {...app} />}
									</Window>
								)
						)}
					</section>
					<section className="icons-grid">
						<FileIcon
							{...{
								...Terminal,
								name: "whoami",
								onOpenApp: setApplicationStatus,
							}}
						/>
					</section>
				</MainScreen>
				<Dock>
					{apps.map((app: IApplication) => (
						<DockIcon {...app} onOpenApp={setApplicationStatus} key={app.id} />
					))}
				</Dock>
			</div>
			<div className="unsupported-media">
				<p>Esta página no es compatible con dispositivos móviles.</p>
				<p>Puedes acceder desde un ordenador.</p>
			</div>
		</>
	);
}

export default App;
