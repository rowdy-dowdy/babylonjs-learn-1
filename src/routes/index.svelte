<script lang="ts">
	import { onMount } from 'svelte';
  import { createScene } from "./sence";
  let el: HTMLElement;
  onMount(() => {
    createScene(el)
  });
</script>

<svelte:head>
	<title>Babylonjs Learn 1</title>
	<meta name="description" content="Babylonjs Learn 1" />
</svelte:head>

<canvas bind:this={el}></canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
		outline: none;
	}
</style>