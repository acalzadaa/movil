<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ConfirmAttendanceModal from '$lib/components/modal/ConfirmAttendanceModal.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'components/modal/ConfirmAttendanceModal',
		component: ConfirmAttendanceModal,
		tags: ['autodocs'],
		args: {
			title: 'Test Modal',
			showModal: true,
			handleHideModal: fn(),
			handleAction: fn()
		}
	});
</script>

<Story name="Default" />
