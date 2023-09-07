import { APPLICATION_STATUS } from "../enums/applicationStatus";
import { IFileIcon } from "./fileIcon";

export interface IApplication extends IFileIcon {
	type: "separator" | "app" | "url";
	status?: APPLICATION_STATUS;
	url?: string;
	defaultSize?: [number, number];
	isFrontMost?: boolean;
	minWidth?: number;
	minHeight?: number;
}
