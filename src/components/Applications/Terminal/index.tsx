import { useEffect, useRef } from "react";
import "./terminal.scss";
import { whoamiApp } from "./whoami";

export const Terminal = (props: any) => {
	const terminalOutput = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (terminalOutput?.current && !terminalOutput?.current?.innerHTML?.length)
			whoamiApp(terminalOutput.current);
	}, [terminalOutput == null]);

	return (
		<div className="terminal">
			<div className="terminal__header draggable-handler">
				<div></div>
				<div className="terminal__title">iTerm2 - whoami</div>
				<div></div>
			</div>
			<code className="terminal__body">
				<span>
					<span className="terminal__alias">~ oscar.munoz@gyrusds.io </span>
					<span className="terminal__prompt">whoami</span>
				</span>
				<p
					id="terminal-output"
					className="terminal__output"
					ref={terminalOutput}
				></p>
			</code>
		</div>
	);
};
