<script>
    import "../app.css";
    import { modal } from "$ts/stores";

    import Toast from "$lib/components/Toast.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import { popups } from "$ts/stores";
    import { onMount } from "svelte";
    import { loadSavedTodos } from "$ts/";

    onMount(() => {
        loadSavedTodos(); // has to be in onMount, so `localStorage` isn't undefined
    });

</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">

	<title>TODO</title>
</svelte:head>

<!-- Toast popups -->
{#if $popups}
    <div class="absolute z-50 w-full h-full pointer-events-none flex flex-col items-end overflow-x-hidden overflow-y-auto justify-start">
        {#each $popups as popup, i (popup)}
            <Toast label={popup?.label} color={popup?.color} {i} />
        {/each}
    </div>
{/if}

<!-- Modals -->
{#if $modal}
    <div class="absolute w-full h-full top-0 left-0 z-40 grid place-content-center overflow-hidden">
        <Modal />
    </div>
{/if}


<div class="w-full h-full transition-all" style="filter: blur({$modal ? 5 : 0}px);">
    <slot />
</div>
