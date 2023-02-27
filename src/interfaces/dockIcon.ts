import { APPLICATION_STATUS } from "../enums/applicationStatus";
import { IFileIcon } from "./fileIcon";

export interface IApplication extends IFileIcon {
	type: "separator" | "app";
	status?: APPLICATION_STATUS;
}
