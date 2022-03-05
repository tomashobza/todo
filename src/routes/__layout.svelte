<script>
    import "../app.css";
    import Toast from "$lib/components/Toast.svelte";
    import { popups } from "$ts/stores";
    import { popup } from "$ts/";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">

	<title>TODO</title>
</svelte:head>

<div class="absolute z-50 w-full h-full pointer-events-none flex flex-col items-end overflow-x-hidden overflow-y-auto justify-start">
    {#each $popups as popup, i (popup)}
        <Toast label={popup?.label} color={popup?.color} {i} />
    {/each}
</div>
<slot />