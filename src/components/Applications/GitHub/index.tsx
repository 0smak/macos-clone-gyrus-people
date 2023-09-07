import "./github.scss";

export const GitHubWindow = (props: any) => {
	return (
		<div className="github">
			<div className="github__header draggable-handler">
				<div></div>
				<input
					type="text"
					className="github__input"
					defaultValue="https://raw.githubusercontent.com/0smak/macos-clone-gyrus-people/main/src/App.tsx"
				/>
				<div></div>
			</div>
			<iframe
				src="https://raw.githubusercontent.com/0smak/macos-clone-gyrus-people/main/src/App.tsx"
				className="github__iframe"
			></iframe>
		</div>
	);
};
