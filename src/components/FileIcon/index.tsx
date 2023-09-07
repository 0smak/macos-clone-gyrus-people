import "./fileicon.scss";
import { IFileIcon } from "../../interfaces/fileIcon";
import Draggable from "react-draggable";
import { APPLICATION_STATUS } from "../../enums/applicationStatus";

export const FileIcon = ({ icon, name, onOpenApp, id }: IFileIcon) => {
	return (
		<Draggable>
			<button
				onClick={() => onOpenApp(id, APPLICATION_STATUS.OPEN)}
				type="button"
				className="file-icon"
			>
				<div className="file-icon__img-container">
					<img src={icon} alt={name} className="file-icon__img" />
				</div>
				<p className="file-icon__name">{name}</p>
			</button>
		</Draggable>
	);
};
