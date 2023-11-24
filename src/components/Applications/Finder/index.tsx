import { useState } from "react";
import "./finder.scss";

export const FinderWindow = (props: any) => {
	const [selectedPhoto, setSelectedPhoto] = useState(0);

	const photos = [
		{
			src: "images/apps/finder/photos/me",
			name: "me",
		},
		{
			src: "images/apps/finder/photos/me2",
			name: "me2",
		},
		{
			src: "images/apps/finder/photos/stop-doing-regex",
			name: "regex",
		},
		{
			src: "images/apps/finder/photos/lambdas",
			name: "lambdas",
		},
		{
			src: "images/apps/finder/photos/api-vs-regex",
			name: "api-vs-regex",
		},
		{
			src: "images/apps/finder/photos/aws-experience",
			name: "aws-experience",
		},
	];

	return (
		<div className="finder">
			<div className="finder__header draggable-handler">
				<div className="finder__window-actions"></div>
				<nav className="finder__header-nav"></nav>
			</div>
			<main className="finder__container">
				<aside className="finder__aside">
					<div className="aside-group">
						<div className="aside-group__title">Favourites</div>
						<div className="aside-group__els">
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/applications.svg"
										alt="Applications"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Applications</span>
							</button>
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/recents.svg"
										alt="Recents"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Recents</span>
							</button>
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/airdrop.svg"
										alt="AirDrop"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">AirDrop</span>
							</button>
							<button className="aside-group__btn aside-group__btn--selected">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/photos.svg"
										alt="Photos"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Photos</span>
							</button>
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/desktop.svg"
										alt="Desktop"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Desktop</span>
							</button>
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/documents.svg"
										alt="Documents"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Documents</span>
							</button>
							<button className="aside-group__btn">
								<span className="aside-group__icon">
									<img
										src="images/apps/finder/icons/downloads.svg"
										alt="Downloads"
										className="aside-group__icon-img"
									/>
								</span>
								<span className="aside-group__label">Downloads</span>
							</button>
						</div>
					</div>
				</aside>
				<section className="finder__content">
					<div className="finder-content">
						<div className="image-display">
							<img
								srcSet={`${
									location.pathname + photos[selectedPhoto]?.src
								}.webp, ${location.pathname + photos[selectedPhoto]?.src}.jpg`}
								src={location.pathname + photos[selectedPhoto]?.src + ".jpg"}
								alt={photos[selectedPhoto]?.name}
							/>
						</div>
						<div className="image-carousel">
							{photos.map((photo, index) => (
								<div
									className={`image-carousel__item ${
										selectedPhoto === index
											? "image-carousel__item--selected"
											: ""
									}`}
									key={index}
									onClick={() => setSelectedPhoto(index)}
								>
									<img
										srcSet={`${location.pathname + photo.src}.webp, ${
											location.pathname + photo.src
										}.jpg`}
										src={location.pathname + photo.src + ".jpg"}
										alt={photo.name}
										className="image-carousel__item-img"
									/>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};
