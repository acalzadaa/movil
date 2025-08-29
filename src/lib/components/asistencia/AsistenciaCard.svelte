<script lang="ts">
	import { triggerOnEnterOrSpace } from '$lib/utils/accessibility';
	import CheckmarkRounded from '../icon/CheckmarkRounded.svelte';

	interface Props {
		onclick: (id: string) => void;
		asistencia: AsistenciaType;
	}

	type AsistenciaType = {
		id: string;
		name: string;
		location: string;
		time: string;
		signed: boolean;
	};

	let { onclick, asistencia, ...props }: Props = $props();

	function handleConfirmAttendanceClick() {
		onclick(asistencia.id);
	}
</script>

<div
	class="asistencia-card"
	aria-hidden="true"
	onclick={handleConfirmAttendanceClick}
	onkeydown={(e) => triggerOnEnterOrSpace(e, handleConfirmAttendanceClick)}
>
	<div>
		<strong class="class-name">{asistencia?.name}</strong>
		<div class="class-details">
			<p class="class-location">{asistencia?.location}</p>
			<p class="class-time">{asistencia.time}</p>
		</div>
	</div>
	{#if asistencia.signed}
		<CheckmarkRounded size={60} />
	{/if}
</div>

<style>
	.asistencia-card {
		border: 2px solid hsl(200 15% 92%);
		border-radius: 18px;
		padding: 24px;
		margin-bottom: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
