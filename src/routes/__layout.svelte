<script>
    import "../app.css";
    import Main from "$lib/components/Main.svelte";
    import { page } from '$app/stores';
    import { todos } from "$ts/stores";

    let indexOfSelected = null;

    $: if ($page.params.slug) indexOfSelected = $todos.findIndex((elem) => elem.id == $page.params.slug);
    $: console.log(indexOfSelected, $todos.findIndex((elem) => elem.id == $page.params.slug));

    // $: console.log($page.params.slug);
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" rel="stylesheet">

	<title>TODO</title>
</svelte:head>

<Main />