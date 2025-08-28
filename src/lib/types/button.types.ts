import type { Snippet } from "svelte";

export interface IconButtonProps extends BaseButtonProps {
	backgroundColor?: string;
	buttonForm?: 'round' | 'square';
	path?: Snippet;
}

export interface ButtonProps extends BaseButtonProps {
	label: string;
	textColor?: string;
	path?: Snippet;
}

interface BaseButtonProps {
	disabled?: boolean;
	ariaLabel?: string;
	// Presentation data
	normalColor?: string;
	hoverColor?: string;
	focusRingColor?: string;
	actionColor?: string;
	disabledColor?: string;
	backgroundColor?: string;
	// Size
	size?: 'small' | 'medium' | 'large';
	// Functions
	handleOnClick?: () => void;
	handleOnKeydown?: (e: KeyboardEvent) => void;
}