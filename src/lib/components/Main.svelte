<script lang="ts">
    import { goto } from "$app/navigation";

    import MainScreen from "$lib/components/MainScreen.svelte";
    import TodoDetail from "$lib/components/TodoDetail.svelte";

    import { selectedTodo, openedDrawer } from "$ts/stores";
    import { swipe } from 'svelte-gestures';
    // import { page } from '$app/stores';

    function handler(event) {
        if (event.detail.direction === "right") {
            selectedTodo.set(null);
            goto("/")
        }
        if (event.detail.direction === "top") !todoOpen && openedDrawer.set(true); 
        if (event.detail.direction === "bottom") openedDrawer.set(false); 
    }

    let innerHeight: number;
    let innerWidth: number;


    let todoOpen = false;
    
    $: if (!!$selectedTodo) setTimeout(() => todoOpen = !!($selectedTodo), 500);

    // $: console.log(todoOpen);
    // $: console.log(todoOpen, $selectedTodo, "penis");
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<!-- overflow container -->
<div class="w-full h-full overflow-hidden" use:swipe={{ timeframe: 300, minSwipeDistance: 100 }} on:swipe={handler}>
    <div class="w-full h-full flex flex-row flex-nowrap transition-all duration-500 will-change-transform {todoOpen ? "open" : ""}">
        <div
            class="w-full h-full overflow-hidden transition-all duration-500 flex-shrink-0 {todoOpen && "round"}"
            >
            <MainScreen {todoOpen} />
        </div>

        <!-- todo detail -->
        <div class="w-[350px] h-full bg-white flex-shrink-0 transition-all overflow-hidden">
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