<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let ticked = false;

    function click() {
        dispatch('click');
    }
</script>

<svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg" on:click={click}>
    <circle cx="14" cy="14" r="12.5" fill="#FFF1F2" stroke="#FBBAC0" stroke-width="3"/>
    {#if ticked}
        <path class="path" d="M5.8418 10.5257L14 19.5L29.8418 4.52566" stroke="black" stroke-width="3"/>
    {/if}
</svg>
    
<style>
    .path {
        stroke-dasharray: 40;
        stroke-dashoffset: 0;
        animation: dash .5s;
    }

    @keyframes dash {
        from {
            stroke-dashoffset: 40;
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>
