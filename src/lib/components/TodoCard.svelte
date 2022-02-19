<script lang="ts">
    import MoveHolder from "$lib/svg/MoveHolder.svelte";
    import { selectedTodo } from "$ts/stores";
    import Tick from "./Tick.svelte";  

    export let todo: {
        done: boolean;
        title: string;
    } = {
        done: false,
        title: "unknown title",
    };

    let open = false;

    $: if (!($selectedTodo)) open = false;

    function tickSwitch() {
        todo.done = !(todo.done);
    }

    function openTodo() {
        selectedTodo.set(todo);
        open = true;
    }
</script>

<div class="w-full rounded-2xl bg-white px-6 flex flex-row items-center gap-4">
    <div>
        <Tick ticked={todo.done} on:click={tickSwitch} />
    </div>
    <div class="font-bold flex-grow h-full truncate py-7" class:line-through={todo.done} on:click={openTodo}>
        {todo.title}
    </div>
    <div class="w-4 h-4 text-gray-500">
        <MoveHolder {open} />
    </div>
</div>
