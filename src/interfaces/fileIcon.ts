export interface IFileIcon {
	id: string;
	icon?: string;
	name?: string;
	onOpenApp?: (string, APPLICATION_STATUS) => void;
}
