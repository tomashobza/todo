<script>
    import Trashcan from "$lib/svg/Trashcan.svelte";
    import DetailTick from "./DetailTick.svelte";

    import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

    export let item;
    export let i;

    function click() {
        item.done = !item.done;
    }

    let showDelete = false;

    function focus() {
        showDelete = true;
    }

    function blur() {
        showDelete = false;
    }

    function remove() {
        dispatch('remove', i);
    }
</script>

<div class="flex flex-row items-center gap-2" class:line-through={item.done} on:mouseenter={focus} on:mouseleave={blur}>
    <DetailTick ticked={item?.done} on:click={click} />
    <input type="text" class="truncate flex-grow" bind:value={item.title}>
    <!-- {item?.title || "unknown label"}</input> -->
    {#if showDelete}
        <div class="w-5 text-red-400 cursor-pointer" on:click={remove}>
            <Trashcan />
        </div>
    {/if}
</div>