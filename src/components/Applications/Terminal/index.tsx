import "./terminal.scss";

export const Terminal = (props: any) => {
	return (
		<div className="terminal">
			<div className="terminal__header draggable-handler">
				<div></div>
				<div className="terminal__title">iTerm2 - $ whoami</div>
				<div></div>
			</div>
			<code className="terminal__body">
				<span className="terminal__alias">$ oscar@gyrus </span>
				<span className="terminal__prompt">whoami</span>
			</code>
		</div>
	);
};
