<script>
    import ArrowLeft from "$lib/svg/ArrowLeft.svelte";
    import Share from "$lib/svg/Share.svelte";

    import TodoDetailItem from "./TodoDetailItem.svelte";

    import { fade } from "svelte/transition";
    import { selectedTodo } from "$ts/stores";

    function closeTodo() {
        selectedTodo.set(null);
    }

    function shareTodo() {
        // TODO share todo
    }

    function removeItem(e) {
        $selectedTodo.list = $selectedTodo.list.filter((x, i) => i != e.detail);
    }
</script>

{#if $selectedTodo}
    <div class="w-full h-full px-4 py-6 flex flex-col" transition:fade>
        <div class="w-full flex flex-row items-center gap-2">
            <div on:click={closeTodo} class="p-2">
                <ArrowLeft />
            </div>
            <div class="font-semibold flex-grow truncate" class:line-through={$selectedTodo.done}>{$selectedTodo?.title || "uknown title"}</div>
            <div class="justify-self-end pr-2" on:click={shareTodo}>
                <Share />
            </div>
        </div>

        <div class="w-full flex flex-col items-stretch gap-4 p-4">
            {#each $selectedTodo.list as item, i}
                <TodoDetailItem {item} {i} on:remove={removeItem} />
            {/each}
        </div>
        <div class="text-gray-400">| Type here..</div>
    </div>
{/if}
