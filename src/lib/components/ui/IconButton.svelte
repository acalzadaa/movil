<script lang="ts">
	import type { IconButtonProps } from '$lib/types/button.types';
	import { triggerOnEnterOrSpace } from '$lib/utils/accessibility';

	let {
		disabled = false,
		ariaLabel = 'Icon-only button', //NOTE: arial label should describe what the button does
		backgroundColor = 'transparent',
		normalColor = 'hsl(200, 10%, 40%)', //Blue mid-light
		hoverColor = 'hsl(200, 10%, 50%)', //Blue 20% lighter
		actionColor = 'hsl(200, 10%, 60%)', //Blue 40% lighter
		disabledColor = 'hsl(200, 10%, 20%)', //Blue-gray light
		focusRingColor = 'hsl(200, 50%, 70%)', //Blue 20% darker
		size = 'medium',
		buttonForm = 'round',
		path,
		handleOnClick
	}: IconButtonProps = $props();

	function convertSize(size: string) {
		if (size === 'small') {
			return {
				iconWidth: '20px',
				iconHeight: '20px'
			};
		}
		if (size === 'large') {
			return {
				iconWidth: '40px',
				iconHeight: '40px'
			};
		}
		return {
			iconWidth: '30px',
			iconHeight: '30px'
		};
	}

	function convertForm(form: string) {
		if (form === 'round') {
			return {
				buttonRadius: '50%'
			};
		} else {
			return {
				buttonRadius: '25%'
			};
		}
	}
</script>

<button
	{disabled}
	onclick={handleOnClick}
	onkeydown={(e) => triggerOnEnterOrSpace(e, handleOnClick)}
	aria-label={ariaLabel}
	class="button icon-button"
	style="
		--background-color: {backgroundColor};
        --normal-color: {normalColor};
        --hover-color: {hoverColor};
        --action-color: {actionColor};
        --disabled-color: {disabledColor};
		--focus-ring-color: {focusRingColor};
		--icon-width: {convertSize(size).iconWidth};
		--icon-height: {convertSize(size).iconHeight};
		--icon-form: {convertForm(buttonForm).buttonRadius};
    "
>
	<svg
		class="icon-button__icon"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 32 32"
		aria-hidden="true"
		focusable="false"
	>
		{#if path}
			{@render path()}
		{:else}
			<circle cx="16" cy="16" r="16" />
		{/if}
	</svg>
</button>

<style>
	* {
		box-sizing: border-box;
	}

	.button {
		text-decoration: none;
		border: none;
		font-family: inherit;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: start;
		font-size: 1rem;
		color: var(--normal-color);
		background-color: var(--background-color);
		border-radius: 0px;
		text-align: center;
		line-height: 1.1;
		transition: 220ms all ease-in-out;
	}

	/* Hover state */
	.button:hover {
		color: var(--hover-color);
		transform: scale(1.1);
	}

	/* Focus state */
	.button:focus {
		outline: none;
		box-shadow:
			0 0 0 1px white,
			0 0 0 3px var(--focus-ring-color);
	}

	/* Active state */
	.button:active {
		color: var(--action-color);
		transform: scale(1.1);
	}

	/* Disabled state */
	.button:disabled {
		color: var(--disabled-color);
		cursor: not-allowed;
	}

	.icon-button {
		width: var(--icon-width);
		height: var(--icon-height);
		border-radius: var(--icon-form);
	}
	.icon-button__icon {
		width: 100%;
		height: 100%;
		fill: currentColor;
	}
</style>
