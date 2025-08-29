<script lang="ts">
	export const prerender = true;
	export const ssr = false;
	export const csr = true;
	
	let { children } = $props();
</script>

<svelte:head>
	<title>Registro de asistencias</title>
	<meta name="Registro de asistencias" content="herramientas de apoyo para el estudiante" />
</svelte:head>

{@render children?.()}
