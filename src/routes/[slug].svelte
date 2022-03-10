<script>
    import { page } from "$app/stores";
    import Main from "$lib/components/Main.svelte";
    import { popup } from "$ts/";
    import { selectedTodo, todos } from "$ts/stores";
import { onMount } from "svelte";


    let indexOfSelected = null;
    
    // function loadTodo() {
    //     selectedTodo.set(null);
    //     if ($page.params.slug) indexOfSelected = $todos.findIndex((elem) => elem.id == $page.params.slug);

    //     if (indexOfSelected < 0) popup(`Todo "${$page.params.slug}" not found.`, "bad");
    //     if (indexOfSelected >= 0) {
    //         selectedTodo.set($todos[indexOfSelected]);
    //     }
    // }

    // $: if ($page.params.slug) loadTodo();
    onMount(() => {
        const indexOfSelected = $todos.findIndex((elem) => elem.id == $page.params.slug);
        if (indexOfSelected < 0) popup(`Todo "${$page.params.slug}" not found.`, "bad");
        if (indexOfSelected >= 0) {
            selectedTodo.set($todos[indexOfSelected]);
        }
    });

    $: console.log("slug", $page.params.slug);
</script>

<Main />