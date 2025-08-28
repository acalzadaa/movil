<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'components/modal/Modal',
		component: Modal,
		tags: ['autodocs'],
		args: {
			title: 'Test modal',
			subtitle: 'The sequel',
			showModal: true,
			handleHideModal: fn()
		}
	});
</script>

<Story name="Default" />

