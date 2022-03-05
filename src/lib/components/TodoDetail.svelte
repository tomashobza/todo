<script>
    import ArrowLeft from "$lib/svg/ArrowLeft.svelte";
    import Share from "$lib/svg/Share.svelte";
    import Save from "$lib/svg/Save.svelte";

    import TodoDetailItem from "./TodoDetailItem.svelte";

    import { fade } from "svelte/transition";
    import { selectedTodo } from "$ts/stores";

    let newItem;

    function closeTodo() {
        selectedTodo.set(null);
    }

    function shareTodo() {
        // TODO add copy to clipboard when no navigator.share

        navigator.share({
            title: $selectedTodo.title,
            text: 'I created a TODO list, check it out!',
            url: $selectedTodo.todoId,
        })
    }

    function removeItem(e) {
        $selectedTodo.list = $selectedTodo.list.filter((x, i) => i != e.detail);
    }

    function keyPressed(e) {
        if (e.charCode === 13) addItem();
    }

    function addItem() {
        if (!newItem) return;
        $selectedTodo.list.push({ title: newItem, done: false });
        $selectedTodo = $selectedTodo;
        newItem = "";
    }
</script>

{#if $selectedTodo}
    <div class="w-full h-full px-4 py-6 flex flex-col" transition:fade>
        <div class="w-full flex flex-row items-center gap-2">
            <div on:click={closeTodo} class="p-2 cursor-pointer transition-all hover:scale-110">
                <ArrowLeft />
            </div>
            <div class="font-semibold flex-grow truncate" class:line-through={$selectedTodo.done}>{$selectedTodo?.title || "uknown title"}</div>
            <div class="justify-self-end pr-2 cursor-pointer transition-all hover:scale-110" on:click={shareTodo}>
                <Share />
            </div>
        </div>

        <div class="w-full flex flex-col flex-grow items-stretch gap-4 p-4 overflow-y-auto">
            {#each $selectedTodo.list as item, i}
                <TodoDetailItem {item} {i} on:remove={removeItem} />
            {/each}
        </div>
        <div class="w-full p-4 flex flex-row items-center">
            <input type="text" class="border-b flex-grow py-2" on:keypress={keyPressed} bind:value={newItem} placeholder="Add a task...">
            <div class="transition-all text-white rounded-r-lg h-full flex items-center justify-center p-2 cursor-pointer">
                <div class="w-6 text-[#ffb7bd] hover:text-[#cc9094]" on:click={addItem}>
                    <Save />
                </div>
            </div>
        </div>
    </div>
{/if}
