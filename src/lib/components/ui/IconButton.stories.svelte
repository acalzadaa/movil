<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import IconButton from './IconButton.svelte';
	import { within, expect } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Components/ui/IconButton',
		tags: ['autodocs'],
		component: IconButton,
		argTypes: {
			disabled: { control: 'boolean' },
			ariaLabel: { control: 'text' },
			backgroundColor: { control: 'color' },
			normalColor: { control: 'color' },
			hoverColor: { control: 'color' },
			actionColor: { control: 'color' },
			disabledColor: { control: 'color' },
			focusRingColor: { control: 'color' },
			size: { control: 'select', options: ['small', 'medium', 'large'] },
			buttonForm: { control: 'select', options: ['round', 'square'] },
			handleOnClick: { action: 'clicked' },
			handleOnKeydown: { action: 'key pressed' }
		}
	});
</script>

<Story
	name="Default"
	tags={['autodocs']}
	args={{
		ariaLabel: 'Default Icon Button',
		size: 'medium',
		buttonForm: 'round'
	}}
/>

<Story
	name="Small Square"
	args={{
		size: 'small',
		buttonForm: 'square',
		ariaLabel: 'Small Square Icon Button'
	}}
/>

<Story
	name="Large Round"
	args={{
		size: 'large',
		buttonForm: 'round',
		ariaLabel: 'Large Round Icon Button'
	}}
/>

<Story
	name="Disabled"
	args={{
		disabled: true,
		ariaLabel: 'Disabled Icon Button'
	}}
/>

<Story
	name="Default Assertions"
	args={{
		ariaLabel: 'Default Icon Button',
		size: 'medium',
		buttonForm: 'round'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: 'Default Icon Button' });
		expect(button).toBeInTheDocument();
		expect(button).not.toBeDisabled();
		expect(button).toHaveStyle({ 'border-radius': '50%' });
		expect(button.querySelector('svg')).toBeInTheDocument();
	}}
/>

<Story
	name="Disabled Assertions"
	args={{
		disabled: true,
		ariaLabel: 'Disabled Icon Button'
	}}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: 'Disabled Icon Button' });
		expect(button).toBeInTheDocument();
		expect(button).toBeDisabled();
		expect(button).toHaveStyle({ color: 'hsl(227, 30%, 80%)' });
	}}
/>
