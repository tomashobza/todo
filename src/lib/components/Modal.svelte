<script>
    import { saveTodo } from "$ts/";
    import { modal, selectedTodo } from "$ts/stores";
    import { fade, fly } from "svelte/transition";

    function addTodo() {
        saveTodo($modal);
        closeModal();
    }

    function closeModal() {
        modal.set(null);
    }
</script>

<div class="absolute top-0 -z-10 left-0 w-full h-full bg-white opacity-20" transition:fade on:click={closeModal} />
<div transition:fly="{{ y: 500 }}">
    <div class="bg-white p-6 max-w-xs rounded-lg shadow-lg flex flex-col items-center gap-6">
        <div>Do you want to add "{$modal}" TODO to your TODO's?</div>
        <div class="w-full grid grid-cols-2 gap-2">
            <button on:click={addTodo} class="button bg-pink-400 hover:bg-pink-500">Add</button>
            <button on:click={closeModal} class="button bg-gray-200 hover:bg-gray-300">Cancel</button>
        </div>
    </div>
</div>

<style lang="postcss">
    .button {
        @apply px-4 py-2 rounded-md font-bold text-sm transition-all;
    }
</style>
