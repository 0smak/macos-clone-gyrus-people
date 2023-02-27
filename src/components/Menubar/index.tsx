import { useClock } from "../../hooks/useClock";
import { AppleIcon } from "../SvgIcons/AppleIcon";
import "./menubar.scss";

export const Menubar = () => (
	<nav className="menu-bar">
		<div className="menu-bar__content">
			<AppleIcon height="16px" />
			<ul className="menu-bar__menu">
				<li className="menu-bar__item">
					<strong>Finder</strong>
				</li>
				<li className="menu-bar__item">File</li>
				<li className="menu-bar__item">Edit</li>
				<li className="menu-bar__item">View</li>
				<li className="menu-bar__item">Go</li>
				<li className="menu-bar__item">Window</li>
				<li className="menu-bar__item">Help</li>
			</ul>
		</div>
		<div className="menu-bar__content">
			<div className="menu-bar__time">{useClock()}</div>
			<div className="menu-bar__buttons">
				<button className="menu-bar__icon">
					<img src="/images/icons/controlcenter.svg" alt="Centro de Control" />
				</button>
				<button className="menu-bar__icon">
					<img src="/images/icons/battery.svg" alt="Batería" />
				</button>
				<button className="menu-bar__icon">
					<img src="/images/icons/user.svg" alt="Usuario" />
				</button>
			</div>
		</div>
	</nav>
);
