<script lang="ts">
    import MainScreen from "$lib/components/MainScreen.svelte";
    import { selectedTodo } from "$ts/stores";
    import { swipe } from 'svelte-gestures';
    import { page } from '$app/stores';

    function handler(event) {
        if (event.detail.direction === "right") selectedTodo.set(null);
    }

    let innerHeight: number;
    let innerWidth: number;

    $: todoOpen = !!($selectedTodo);

    // $: console.log($page.url.searchParams.get("id"));
    // TODO getting new task from url
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<!-- overflow container -->
<div class="w-full h-full overflow-hidden" use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }} on:swipe={handler}>
    <div class="w-full h-full flex flex-row flex-nowrap transition-all duration-500 will-change-transform" class:open={todoOpen}>
        <div
            class="w-full h-full overflow-hidden transition-all duration-500 flex-shrink-0"
            class:round={todoOpen}
            >
            <MainScreen />
        </div>

        <!-- todo detail -->
        <div class="w-full h-full bg-white flex-shrink-0 transition-all">
            {$selectedTodo}
        </div>
    </div>
</div>

<style lang="postcss">
    .open {
        transform: translateX(-80%);
    }

    .round {
        border-radius: 0rem 2rem 2rem 0rem;
    }
</style>