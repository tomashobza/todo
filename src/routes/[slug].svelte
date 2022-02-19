<script>
    import Main from "$lib/components/Main.svelte";
    import { page } from '$app/stores';

    $: console.log($page.params.slug);
</script>

<Main />