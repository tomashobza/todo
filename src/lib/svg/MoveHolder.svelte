<script>
    export let open = false;
</script>

<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class:top-rotate={open} class="will-change-transform transition-transform duration-500" d="M4 8H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path class:bottom-rotate={open} class="will-change-transform transition-transform duration-500" d="M4 16H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<style lang="postcss">
    .top-rotate {
        @apply rotate-45 origin-center;
    }

    .bottom-rotate {
        @apply -rotate-45 origin-center;
    }
</style>
