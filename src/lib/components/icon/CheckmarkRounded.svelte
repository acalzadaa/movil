<script>
	const { color = 'green', size = 42, strokeWidth = 1 } = $props();
	let componentColor = $state(color);
	let componentSize = $state(size);
	let componentStrokeWidth = $state(strokeWidth);
</script>

<div class="checkmark-container">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={componentSize}
		height={componentSize}
		viewBox="0 0 32 32"
		role="img"
		aria-label="checkmark-icon"
	>
		<path
			fill={componentColor}
			d="m 20.216,11.0245 -6.6495,6.665 -2.5575,-2.5575 a 1.55,1.55 0 1 0 -2.1855,2.1855 l 3.6425,3.658 a 1.55,1.55 0 0 0 1.1005,0.4495 1.55,1.55 0 0 0 1.085,-0.4495 l 7.75,-7.75 a 1.55,1.55 0 0 0 0,-2.201 1.55,1.55 0 0 0 -2.1855,0 M 16,0.5 A 15.5,15.5 0 1 0 31.5,16 15.5,15.5 0 0 0 16,0.5 m 0,27.9 A 12.4,12.4 0 1 1 28.4,16 12.4,12.4 0 0 1 16,28.4"
			stroke-width={componentStrokeWidth}
			stroke={componentColor}
		/>
	</svg>
</div>


<style>
	.checkmark-container {
		display: flex;
		align-items: center;
		justify-items: center;
	}
</style>