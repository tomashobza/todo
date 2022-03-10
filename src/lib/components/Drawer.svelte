<script>
    import ArrowUp from "$lib/svg/ArrowUp.svelte";
    import Plus from "$lib/svg/Plus.svelte";
    import { createTodo } from "$ts/";
    import { addTodo } from "$ts/";
    import { openedDrawer } from "$ts/stores";

    export let hide = false;

    let newTodoId = "";
    let newTodoTitle = "";

    function addTodoClick() {
        addTodo(newTodoId);
    }

    function createTodoClick() {
        createTodo(newTodoTitle);
    }

    $: if (hide) openedDrawer.set(false);

    function toggleDrawer() {
        openedDrawer.set(!($openedDrawer));
    }
</script>

<div class="pointer-events-auto w-full h-[20rem] bg-white bottom-0 rounded-t-3xl max-w-lg transition-all flex flex-col p-4 items-center duration-500 {hide ? "hide" : $openedDrawer ? "" : "closed"}">
    <div on:click={toggleDrawer} class="cursor-pointer py-1 transition-all duration-500 px-4 outline-none focus:outline-none hover:outline-none active:outline-none" class:rotate={$openedDrawer}>
        <ArrowUp />
    </div>

    <div class="w-full flex flex-row px-4 gap-2 my-10">
        <input class="flex-grow bg-gray-100 p-2 rounded-lg" type="text" placeholder="Add a TODO by id..." bind:value={newTodoId}>
        <button class="py-2 px-3 flex flex-row items-center gap-1 bg-pink-300 text-sm rounded-lg transition-all hover:bg-pink-400 font-bold" on:click={addTodoClick}>
            <div class="w-4">
                <Plus />
            </div>
            Add
        </button>
    </div>

    <div class="flex flex-row w-full items-center gap-2 px-4">
        <div class="flex-grow">
            <hr />
        </div>
        <div class="text-sm">OR</div>
        <div class="flex-grow">
            <hr />
        </div>
    </div>

    <div class="w-full flex flex-row px-4 gap-2 my-10">
        <input class="flex-grow bg-gray-100 p-2 rounded-lg" type="text" placeholder="Add title of new TODO..." bind:value={newTodoTitle}>
        <button class="py-2 px-3 flex flex-row items-center gap-1 bg-pink-300 text-sm rounded-lg transition-all hover:bg-pink-400 font-bold" on:click={createTodoClick}>
            <div class="w-4">
                <Plus />
            </div>
            Create
        </button>
    </div>
</div> 


<style lang="postcss">
    .hide {
        @apply translate-y-[120%];
    }

    .closed {
        /* @apply translate-y-[92%]; */
        transform: translateY(calc(100% - 4rem));
    }    

    .rotate {
        @apply rotate-180;
    }
</style>