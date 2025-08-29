import type { Snippet } from "svelte";

	export interface ModalProps {
		//header data (basic)
		showModal: boolean;
		showCancel?: boolean;

		//presentacion data (basic)
		primaryColor?: string;
		secondaryColor?: string;
		backdropColor?: string;
		modalColor?: string;

		//size data (basic)
		minWidth?: number;
		maxHeight?: number;

		//implement this function on the parent!! (basic)
		handleHideModal: () => void;

		//children snippets
		modalHeader? : Snippet,
		modalBody? : Snippet,
		modalForm? : Snippet,
		modalActions? : Snippet,
		modalFooter? : Snippet,
	}