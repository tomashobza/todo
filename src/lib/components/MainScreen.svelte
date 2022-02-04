<script lang="ts">
    import Circles from "$lib/svg/Circles.svelte";    
    import TodoList from "./TodoList.svelte";
    import { todosWithId } from "$ts/stores";
</script>

<div class="w-full h-full relative flex flex-col">
    <!-- Background -->
    <div class="absolute -z-10 top-0 left-0 background-gradient w-full h-full">
        <div class="w-full h-full circles">
            <Circles />
        </div>
    </div>

    <!-- Main content -->
    <div class="w-full h-full flex flex-col items-stretch">
        <div class="text-white font-bold text-4xl py-10 px-6">
            Your TODO's
        </div>
        
        <div class="flex-grow">
            <TodoList items={$todosWithId} />
        </div>
    </div>

    <!-- Drawer -->
    <!-- <div class="pointer-events-none absolute w-full h-full top-0 left-0 f">
        <div class="w-full h-full bg-white bottom-0 rounded-t-3xl" /> 
    </div> -->
</div>

<style>
    .background-gradient {
        background: linear-gradient(180deg, #FFB6B9 0%, #A5DEE5 100%);
        background-color: white;
    }

    .circles {
        filter: blur(100px);
    }
</style>
