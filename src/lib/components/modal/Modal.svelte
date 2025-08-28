<script lang="ts">
	import CancelIconButton from '../common/CancelIconButton.svelte';
	import type { ModalProps } from '$lib/types/modal.types';
	import { triggerOnEnterOrSpace } from '$lib/utils/accessibility';

	let {
		showModal = true,
		showCancel = false,

		primaryColor = 'hsl(227, 50%, 5%)', //
		secondaryColor = 'hsl(227, 50%, 5%)',
		backdropColor = 'hsla(227, 0%, 0%, 0.6)',
		modalColor = 'hsla(227, 50%, 95%, 1 )',

		minWidth = 300, //HSI best practice
		maxHeight = 560, //HSI best practice

		handleHideModal,

		modalHeader,
		modalBody,
		modalForm,
		modalActions,
		modalFooter
	}: ModalProps = $props();
</script>

{#if showModal}
	<section
		class="overlay"
		aria-hidden={!showModal}
		style="
	--primary-text-color:{primaryColor};
	--secondary-text-color:{secondaryColor};
	--backdrop-background-color:{backdropColor};
	--modal-background-color:{modalColor};
	--min-width:{minWidth}px;
	--max-height:{maxHeight}px;
	"
	>
		<div class="modal">
			<div class="header">
				{#if modalHeader}
					{@render modalHeader()}
				{/if}
				{#if showCancel}
					<CancelIconButton
						buttonForm={'round'}
						size={'small'}
						handleOnClick={handleHideModal}
						handleOnKeydown={(e) => triggerOnEnterOrSpace(e, handleHideModal)}
					/>
				{/if}
			</div>
			<div class="body">
				{#if modalBody}
					{@render modalBody()}
				{/if}
			</div>
			<div class="form">
				{#if modalForm}
					{@render modalForm()}
				{/if}
			</div>
			<div class="actions">
				{#if modalActions}
					{@render modalActions()}
				{/if}
			</div>
			<div class="footer">
				{#if modalFooter}
					{@render modalFooter()}
				{/if}
			</div>
		</div>
	</section>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: var(--backdrop-background-color);
		align-items: center;
		justify-content: center;
		z-index: 1000;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.modal {
		display: flex;
		flex-direction: column;
		width: var(--width);
		height: var(--height);
		background-color: var(--modal-background-color);
		border-radius: 12px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
		padding: 16px;
		gap: 0px;
		z-index: 1001;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		color: var(--primary-text-color);
		font-size: 1em;
		font-weight: bold;
	}

	.body {
		font-size: 1em;
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		color: var(--secondary-text-color);
		font-size: 1em;
		margin-bottom: 16px;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.footer {
		display: flex;
		justify-content: flex-end;
		font-size: 0.8em;
	}
</style>
