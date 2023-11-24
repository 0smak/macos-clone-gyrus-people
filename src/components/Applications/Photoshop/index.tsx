import "./photoshop.scss";
export const PhotoshopWindow = (props: any) => {
	return (
		<div className="photoshop">
			<div className="photoshop__header draggable-handler">
				<nav className="photoshop__header-nav">
					<div className="photoshop__header-group"></div>
					<div className="photoshop__header-title">
						Adobe Photoshop {new Date().getFullYear()}
					</div>
					<div className="photoshop__header-group"></div>
				</nav>
			</div>
			<main className="photoshop__container">
				<aside className="photoshop__aside">
					<div className="photoshop__toolbox">
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/Cursor.svg"
								}
								alt="Cursor tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={location.pathname + "images/apps/photoshop/icons/Move.svg"}
								alt="Move tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname +
									"images/apps/photoshop/icons/magnifier.svg"
								}
								alt="magnifier tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/Vector.svg"
								}
								alt="Vector tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={location.pathname + "images/apps/photoshop/icons/Text.svg"}
								alt="Text tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/Brush.svg"
								}
								alt="Brush tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/pipette.svg"
								}
								alt="pipette tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/Stamp.svg"
								}
								alt="Stamp tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={
									location.pathname + "images/apps/photoshop/icons/Rubber.svg"
								}
								alt="Rubber tool"
								className="photoshop__tool-img"
							/>
						</button>
						<button className="photoshop__tool">
							<img
								src={location.pathname + "images/apps/photoshop/icons/Blur.svg"}
								alt="Blur tool"
								className="photoshop__tool-img"
							/>
						</button>
					</div>
				</aside>
				<section className="photoshop__content">
					<img
						className="photoshop__content-image"
						srcSet={`${
							location.pathname +
							"images/apps/photoshop/graphic-design-meme.webp"
						}, ${
							location.pathname +
							"images/apps/photoshop/graphic-design-meme.jpg"
						}
					`}
						src={
							location.pathname +
							"images/apps/photoshop/graphic-design-meme.jpg"
						}
						alt="Graphic Design is my passion meme"
					/>
				</section>
			</main>
		</div>
	);
};
