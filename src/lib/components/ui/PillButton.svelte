<script lang="ts">
	import type { ButtonProps } from '$lib/types/button.types';

	let {
		disabled = false,
		label = 'Button',
		ariaLabel = 'button',
		variant = 'primary',
		...props
	}: ButtonProps & { variant?: 'primary' | 'secondary' | 'tertiary' } = $props();

	function handleClick() {
		if (disabled) return;
		props.handleOnClick?.();
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			handleClick();
		}
		props.handleOnKeydown?.(e);
	}

	const variantStyles = {
		primary: {
			normalColor: 'hsl(220, 70%, 50%)',
			hoverColor: 'hsl(220, 70%, 45%)',
			activeColor: 'hsl(220, 70%, 40%)',
			disabledColor: 'hsl(220, 20%, 80%)',
			focusRingColor: 'hsl(220, 70%, 70%)',
			textColor: 'hsl(0, 0%, 100%)'
		},
		secondary: {
			normalColor: 'hsl(220, 15%, 90%)',
			hoverColor: 'hsl(220, 15%, 85%)',
			activeColor: 'hsl(220, 15%, 80%)',
			disabledColor: 'hsl(220, 10%, 95%)',
			focusRingColor: 'hsl(220, 70%, 70%)',
			textColor: 'hsl(220, 70%, 50%)'
		},
		tertiary: {
			normalColor: 'transparent',
			hoverColor: 'hsl(220, 15%, 90%)',
			activeColor: 'hsl(220, 15%, 85%)',
			disabledColor: 'hsl(220, 10%, 95%)',
			focusRingColor: 'hsl(220, 70%, 70%)',
			textColor: 'hsl(220, 70%, 50%)'
		}
	};
</script>

<button
	{disabled}
	onclick={handleClick}
	onkeydown={handleKeyDown}
	aria-label={ariaLabel}
	class="button"
	style="
		--text-color: {variantStyles[variant].textColor};
		--normal-color: {variantStyles[variant].normalColor};
		--hover-color: {variantStyles[variant].hoverColor};
		--active-color: {variantStyles[variant].activeColor};
		--disabled-color: {variantStyles[variant].disabledColor};
		--focus-ring-color: {variantStyles[variant].focusRingColor};
	">{label}</button
>

<style>
	* {
		box-sizing: border-box;
	}

	/* Button resets */
	.button {
		border: none;
		background-color: transparent;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		padding: 0;
		cursor: pointer;
	}

	/* Button base styles */
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--normal-color);
		color: var(--text-color);
		border-radius: 9999px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
		padding: 0.5em 1.5em;
		min-width: 14ch;
		min-height: 40px;
		font-size: 1em;
		line-height: 1.2;
		transition:
			background-color 150ms ease-in-out,
			box-shadow 150ms ease-in-out;
	}

	/* Hover state */
	.button:hover {
		background-color: var(--hover-color);
	}

	/* Focus state */
	.button:focus {
		outline: none;
		box-shadow:
			0 0 0 1px rgba(255, 255, 255, 0.5),
			0 0 0 3px var(--focus-ring-color);
	}

	/* Active state */
	.button:active {
		background-color: var(--active-color);
	}

	/* Disabled state */
	.button:disabled {
		background-color: var(--disabled-color);
		color: hsl(0, 0%, 60%);
		cursor: not-allowed;
	}
</style>