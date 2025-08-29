<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CheckmarkRounded from '$lib/components/icon/CheckmarkRounded.svelte';

	const { Story } = defineMeta({
		title: 'components/icon/CheckmarkRounded',
		tags: ['autodocs'],
		component: CheckmarkRounded,
	});
</script>

<Story name="default" tags={['autodocs']}/>
<Story name="green" args={{ color: 'green', size: '42' }}>
	{#snippet template(args)}
		<CheckmarkRounded {...args} />
	{/snippet}
</Story>
