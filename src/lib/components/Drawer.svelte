<script>
    import ArrowUp from "$lib/svg/ArrowUp.svelte";
    import { openedDrawer } from "$ts/stores";

    export let hide = false;

    $: if (hide) openedDrawer.set(false);

    function toggleDrawer() {
        openedDrawer.set(!($openedDrawer));
    }
</script>

<div class="pointer-events-auto w-full h-full bg-white bottom-0 rounded-t-3xl max-w-lg transition-all flex flex-col p-4 items-center duration-500 {hide ? "hide" : $openedDrawer ? "" : "closed"}">
    <div on:click={toggleDrawer} class="cursor-pointer py-1 transition-all duration-500 px-4 outline-none focus:outline-none hover:outline-none active:outline-none" class:rotate={$openedDrawer}>
        <ArrowUp />
    </div>
    <!-- TODO add "add task" form here -->
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