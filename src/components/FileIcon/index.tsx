import "./fileicon.scss";
import { IFileIcon } from "../../interfaces/fileIcon";
import Draggable from "react-draggable";

export const FileIcon = ({ icon, name, id }: IFileIcon) => {
	return (
		<Draggable>
			<button type="button" className="file-icon">
				<div className="file-icon__img-container">
					<img src={icon} alt={name} className="file-icon__img" />
				</div>
				<p className="file-icon__name">{name}</p>
			</button>
		</Draggable>
	);
};
