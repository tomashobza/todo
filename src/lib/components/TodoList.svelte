<script>
	import TodoCard from './TodoCard.svelte';

	export let items = [];

	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { savedTodos } from '$ts/stores';
	import { fade } from 'svelte/transition';

	const flipDurationMs = 300;

	function handleDndConsider(e) {
		items = e.detail.items;
	}

	function handleDndFinalize(e) {
		items = e.detail.items;
		savedTodos.set(items.map((elem) => elem.id));
	}
</script>

<div class="w-full h-full flex flex-col items-stretch overflow-y-auto overflow-x-hidden px-4 gap-4 pb-20" use:dndzone={{ items, flipDurationMs, dropTargetStyle: { outline: 'none' } }} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
	{#each items as item, i (item.id)}
		<div animate:flip={{ duration: flipDurationMs }} in:fade={{ duration: 500, delay: i * 100 }}>
			<TodoCard todo={item} />
		</div>
	{/each}
</div>
