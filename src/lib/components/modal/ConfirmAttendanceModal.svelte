<script lang="ts">
	import type { ModalProps } from '$lib/types/modal.types';
	import { triggerOnEnterOrSpace } from '$lib/utils/accessibility';
	import PillButton from '../ui/PillButton.svelte';
	import Modal from './Modal.svelte';

	type Props = ModalProps & {
		//functions to implement them on parent (basic)
		handleAction: () => void;
	};

	let {
		primaryColor = 'hsl(227 50% 5%)',
		secondaryColor = 'hsl(227 50% 5%)',
		backdropColor = 'hsl(227 0% 0% / 0.6 )',
		modalColor = 'hsl(227 50% 95% / 1)',
		showModal = true,
		showCancel = false, //not used!
		handleHideModal,
		handleAction
	}: Props = $props();

	function signButtonClick() {
		console.log('signed!');
		handleAction();
		handleHideModal();
	}

	function cancelButtonClick() {
		console.log('cancelled!');
		handleHideModal();
	}
</script>

<Modal
	{primaryColor}
	{secondaryColor}
	{backdropColor}
	{modalColor}
	{showModal}
	{showCancel}
	{handleHideModal}
>
	{#snippet modalHeader()}
		<h1>Firme su asistencia</h1>
	{/snippet}

	{#snippet modalActions()}
		<PillButton
			variant={'secondary'}
			label={'Cancelar'}
			handleOnClick={cancelButtonClick}
			handleOnKeydown={(e) => triggerOnEnterOrSpace(e, cancelButtonClick)}
		/>
		<PillButton
			variant={'primary'}
			label={'Firmar'}
			handleOnClick={signButtonClick}
			handleOnKeydown={(e) => triggerOnEnterOrSpace(e, signButtonClick)}
		/>
	{/snippet}
</Modal>
