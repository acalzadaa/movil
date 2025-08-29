<script>
	import ConfirmAttendanceModal from '$lib/components/modal/ConfirmAttendanceModal.svelte';
	import { triggerOnEnterOrSpace } from '$lib/utils/accessibility';

	let showConfirmAttendanceModal = $state(false);

	function handleHideConfirmAttendanceModal() {
		showConfirmAttendanceModal = false;
	}

	async function handleConfirmAttendanceAction() {
		handleHideConfirmAttendanceModal();
	}

	function handleConfirmAttendanceClick() {
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
		<div
			class="asistencia-card"
			aria-hidden="true"
			onclick={handleConfirmAttendanceClick}
			onkeydown={(e) => triggerOnEnterOrSpace(e, handleConfirmAttendanceClick)}
		>
			<strong class="class-name">Taller Practico de Cirugia</strong>
			<div class="class-details">
				<p class="class-location">Hospital General de la Zona Norte</p>
				<p class="class-time">11:00 - 12:00</p>
			</div>
		</div>
		<div
			class="asistencia-card"
			aria-hidden="true"
			onclick={handleConfirmAttendanceClick}
			onkeydown={(e) => triggerOnEnterOrSpace(e, handleConfirmAttendanceClick)}
		>
			<strong class="class-name">Taller Practico de Cirugia</strong>
			<div class="class-details">
				<p class="class-location">Hospital General de la Zona Norte</p>
				<p class="class-time">11:00 - 12:00</p>
			</div>
		</div>
		<div
			class="asistencia-card"
			aria-hidden="true"
			onclick={handleConfirmAttendanceClick}
			onkeydown={(e) => triggerOnEnterOrSpace(e, handleConfirmAttendanceClick)}
		>
			<strong class="class-name">Taller Practico de Cirugia</strong>
			<div class="class-details">
				<p class="class-location">Hospital General de la Zona Norte</p>
				<p class="class-time">11:00 - 12:00</p>
			</div>
		</div>
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

	.asistencia-card {
		border: 2px solid hsl(200 15% 92%);
		border-radius: 18px;
		padding: 24px;
		margin-bottom: 15px;
	}

	.class-name {
		font-size: 1.25em;
		font-weight: 600;
	}

	.class-details {
		font-size: 1em;
	}

	.class-location {
		font-size: 1em;
	}

	.class-time {
		font-size: 1em;
	}
</style>
