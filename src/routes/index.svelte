<script>
    import Main from "$lib/components/Main.svelte";

    import { page } from '$app/stores'
import { selectedTodo, todos } from "$ts/stores";
    const email = $page.url.searchParams.get('id');
    console.log(email);

    if (email) selectedTodo.set($todos[0]);
</script>

<Main />