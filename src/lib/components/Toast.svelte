<script lang="ts">
    import X from "$lib/svg/X.svelte";
    import { closePopup } from "$ts/";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    export let label: string = "lolec"
    export let color: "good" | "bad" | null = "good";
    export let i;
    export let duration = 4000;
    let _duration = duration;

    onMount(() => {
        const countdown = setInterval(() => {
            if (_duration <= 0) {
                close()
                clearInterval(countdown);
            }
            _duration -= 1000;
        }, 1000);
    });

    function close() {
        closePopup(i);
    }
</script>

<div class="{color == "good" ? "good" : color == "bad" ? "bad" : ""} bg-white p-4 shadow-lg rounded-lg m-2 flex flex-row items-center gap-2 pointer-events-auto relative overflow-hidden" transition:fly="{{ x: 200, duration: 300 }}">
    <div class="w-4 cursor-pointer" on:click={close}>
        <X />
    </div>
    <div>{label || "unknown"}</div>
    
    <div class="absolute transition-all duration-1000 ease-linear bottom-0 left-0 h-1 bg-gray-300" style="width: {_duration/duration*100}%" />
</div>

<style lang="postcss">
    .good {
        @apply text-green-500;
    }

    .bad {
        @apply text-red-500;
    }
</style>