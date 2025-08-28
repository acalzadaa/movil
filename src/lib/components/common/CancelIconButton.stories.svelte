<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CancelIconButton from '$lib/components/common/CancelIconButton.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'components/common/CancelIconButton',
		component: CancelIconButton,
		tags: ['autodocs'],
		argTypes: {
			backgroundColor: { control: 'color' },
			normalColor: { control: 'color' },
			hoverColor: { control: 'color' },
			actionColor: { control: 'color' },
			disabledColor: { control: 'color' },
			focusRingColor: { control: 'color' }
		},
		args: {
			disabled: false,
			ariaLabel: 'Icon-only button',
			backgroundColor: 'transparent',
			normalColor: 'hsl(200, 10%, 70%)', //Blue mid-light
			hoverColor: 'hsl(200, 10%, 60%)', //Blue 20% lighter
			actionColor: 'hsl(200, 10%, 50%)', //Blue 40% lighter
			disabledColor: 'hsl(200, 10%, 20%)', //Blue-gray light
			focusRingColor: 'hsl(200, 50%, 70%)', //Blue 20% darker
			handleOnClick: fn(),
			handleOnKeydown: fn()
		}
	});
</script>

<Story name="Default" />

<Story name="Small" args={{ size: 'small' }} />

<Story name="Medium" args={{ size: 'medium' }} />
