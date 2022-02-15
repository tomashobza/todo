<script>
    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let ticked = false;

    function click() {
        dispatch('click');
    }
</script>



<svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" on:click={click}>
    <circle cx="8" cy="8" r="8" fill="#FBBAC0"/>
    {#if ticked}
        <path class="path" d="M3.15137 6.48444L7.40405 11.1624L16.7599 2.23176" stroke="black" stroke-width="2"/>
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
