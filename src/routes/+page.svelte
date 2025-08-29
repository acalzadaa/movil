<script lang="ts">
	import ConfirmAttendanceModal from '$lib/components/modal/ConfirmAttendanceModal.svelte';
	import AsistenciaCard from '$lib/components/asistencia/AsistenciaCard.svelte';
	import asistenciasData from '$lib/asistenciasData';

	let showConfirmAttendanceModal = $state(false);
	let selectedAsistenciaId = $state('');
	let asistencias = $state(asistenciasData);
	
	function handleHideConfirmAttendanceModal() {
		showConfirmAttendanceModal = false;
		selectedAsistenciaId = '';
	}

	async function handleConfirmAttendanceAction() {
		if (selectedAsistenciaId) {
			console.log(`Confirmed attendance for ID: ${selectedAsistenciaId}`);
			asistencias.find((asistencia) => asistencia.id === selectedAsistenciaId)!.signed = true;
		}
		handleHideConfirmAttendanceModal();
	}

	function handleConfirmAttendanceClick(id: string) {
		selectedAsistenciaId = id;
		showConfirmAttendanceModal = true;
	}

</script>

<section class="container">
	<div class="header">
		<h1>Hola, Usuario</h1>
	</div>
	<div class="title">
		<h2>Registrar asistencias</h2>
	</div>
	<div class="container-asistencias">
		{#each asistencias as asistencia}
			<AsistenciaCard {asistencia} onclick={handleConfirmAttendanceClick} />
		{/each}
	</div>
</section>
<section class="modals">
	<ConfirmAttendanceModal
		showModal={showConfirmAttendanceModal}
		handleHideModal={handleHideConfirmAttendanceModal}
		handleAction={handleConfirmAttendanceAction}
	/>
</section>

<style>
	.container {
		margin-left: 16px;
		margin-right: 16px;
	}

	.header {
		margin-left: 20px;
		font-size: 2.5em;
		font-weight: 700;
		margin-bottom: 48px;
	}

	.title {
		font-size: 1.2em;
		font-weight: 600;
		margin-bottom: 32px;
	}
</style>
