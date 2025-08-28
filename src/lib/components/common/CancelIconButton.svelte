<script lang="ts">
	import IconButton from '../ui/IconButton.svelte';

	interface Props {
		disabled?: boolean;
		ariaLabel?: string;

		backgroundColor?: string;
		normalColor?: string;
		hoverColor?: string;
		focusRingColor?: string;
		actionColor?: string;
		disabledColor?: string;

		size?: 'small' | 'medium' | 'large';
		buttonForm?: 'round' | 'square';

		handleOnClick?: () => void;
		handleOnKeydown?: (e: KeyboardEvent) => void;
	}

	let {
		disabled = false,
		ariaLabel = 'Icon-only close modal button', //NOTE: arial label should describe what the button does
		backgroundColor = 'transparent',
		normalColor = 'hsl(200, 10%, 40%)', //Blue mid-light
		hoverColor = 'hsl(200, 10%, 50%)', //Blue 20% lighter
		actionColor = 'hsl(200, 10%, 60%)', //Blue 40% lighter
		disabledColor = 'hsl(200, 10%, 20%)', //Blue-gray light
		focusRingColor = 'hsl(200, 50%, 70%)', //Blue 20% darker
		size = 'medium',
		buttonForm = 'square',
		handleOnClick,
		handleOnKeydown,
		...props
	}: Props = $props();
</script>

<IconButton
	{disabled}
	{ariaLabel}
	{backgroundColor}
	{normalColor}
	{hoverColor}
	{actionColor}
	{focusRingColor}
	{disabledColor}
	{size}
	{buttonForm}
	{handleOnClick}
	{handleOnKeydown}
>
	{#snippet path()}
		<path
			d="M 3.8040487,0.5 C 2.8441937,0.5 2.0559471,0.81378539 1.4348665,1.4348665 0.81378539,2.0559471 0.5,2.8441937 0.5,3.8040487 c 0,0.959852 0.31378539,1.7523699 0.9348665,2.3734501 L 11.257367,16 1.4348665,25.822501 C 0.81378539,26.443581 0.5,27.236097 0.5,28.195951 c 0,0.959851 0.31378539,1.748101 0.9348665,2.369181 C 2.0559471,31.186219 2.8441937,31.5 3.8040487,31.5 c 0.959852,0 1.7523699,-0.313783 2.3734501,-0.934868 L 16,20.742633 l 9.822501,9.822499 c 0.62108,0.621087 1.413598,0.934868 2.37345,0.934868 0.959854,0 1.748106,-0.313783 2.369181,-0.934868 C 31.186219,29.944055 31.5,29.155802 31.5,28.195951 c 0,-0.959854 -0.313783,-1.75237 -0.934868,-2.37345 L 20.742633,16 30.565132,6.1774988 C 31.186219,5.5564186 31.5,4.7639007 31.5,3.8040487 31.5,2.8441937 31.186217,2.0559471 30.565132,1.4348665 29.944055,0.81378539 29.155805,0.5 28.195951,0.5 c -0.959852,0 -1.75237,0.31378539 -2.37345,0.9348665 L 16,11.257367 6.1774988,1.4348665 C 5.5564186,0.81378539 4.7639007,0.5 3.8040487,0.5 Z"
		>
		</path>
	{/snippet}
</IconButton>
