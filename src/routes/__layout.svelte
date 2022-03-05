<script>
    import "../app.css";
    import Main from "$lib/components/Main.svelte";
    import { page } from '$app/stores';
    import { selectedTodo, todos } from "$ts/stores";

    import Toast from "$lib/components/Toast.svelte";
    import { popups } from "$ts/stores";
    import { popup } from "$ts/";
    import { onMount } from "svelte";

    let mounted = false;
    onMount(() => mounted = true);

    let indexOfSelected = null;

    $: if ($page.params.slug) indexOfSelected = $todos.findIndex((elem) => elem.id == $page.params.slug);

    $: if (indexOfSelected < 0) popup("Todo not found.", "bad");
    $: if (indexOfSelected >= 0) selectedTodo.set($todos[indexOfSelected]);
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">

	<title>TODO</title>
</svelte:head>

{#if $popups && mounted}
    <div class="absolute z-50 w-full h-full pointer-events-none flex flex-col items-end overflow-x-hidden overflow-y-auto justify-start">
        {#each $popups as popup, i (popup)}
            <Toast label={popup?.label} color={popup?.color} {i} />
        {/each}
    </div>
{/if}
<Main />
