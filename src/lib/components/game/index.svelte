<script lang="ts">
	import { onMount } from 'svelte';
  import { Playground } from "./game";
  let el: HTMLCanvasElement;
  onMount(() => {
    new Playground(el)
  });

</script>

<canvas class="w-full h-screen focus:outline-none" bind:this={el}></canvas>