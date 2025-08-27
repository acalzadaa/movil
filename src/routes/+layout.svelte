<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	export const prerender = true; // Prerender all pages
	export const ssr = false; // Disable SSR
	export const csr = true; // Enable client-side rendering
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
