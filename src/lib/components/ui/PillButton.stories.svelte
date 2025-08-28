<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PillButton from '$lib/components/ui/PillButton.svelte';

	const { Story } = defineMeta({
		title: 'Components/ui/PillButton',
		tags: ['autodocs'],
		component: PillButton
	});
</script>

<Story name="default" tags={['autodocs']} />
