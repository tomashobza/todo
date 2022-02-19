<script lang="ts">
    import MainScreen from "$lib/components/MainScreen.svelte";
    import TodoDetail from "$lib/components/TodoDetail.svelte";

    import { selectedTodo, openedDrawer } from "$ts/stores";
    import { swipe } from 'svelte-gestures';
    // import { page } from '$app/stores';

    function handler(event) {
        if (event.detail.direction === "right") selectedTodo.set(null);
        if (event.detail.direction === "top") !todoOpen && openedDrawer.set(true); 
        if (event.detail.direction === "bottom") openedDrawer.set(false); 
    }

    let innerHeight: number;
    let innerWidth: number;

    $: todoOpen = !!($selectedTodo);

    // $: console.log($page.url.searchParams.get("id"));
    // TODO getting new task from url
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<!-- overflow container -->
<div class="w-full h-full overflow-hidden" use:swipe={{ timeframe: 300, minSwipeDistance: 100 }} on:swipe={handler}>
    <div class="w-full h-full flex flex-row flex-nowrap transition-all duration-500 will-change-transform" class:open={todoOpen}>
        <div
            class="w-full h-full overflow-hidden transition-all duration-500 flex-shrink-0"
            class:round={todoOpen}
            >
            <MainScreen {todoOpen} />
        </div>

        <!-- todo detail -->
        <div class="w-[350px] h-full bg-white flex-shrink-0 transition-all">
            <TodoDetail />
        </div>
    </div>
</div>

<style lang="postcss">
    .open {
        transform: translateX(-350px);
    }

    .round {
        border-radius: 0rem 2rem 2rem 0rem;
    }
</style>