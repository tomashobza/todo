<script lang="ts">
	import Circles from '$lib/svg/Circles.svelte';
	import TodoList from './TodoList.svelte';
	import Drawer from './Drawer.svelte';
	import { todos } from '$ts/stores';

	export let todoOpen: boolean;
</script>

<div class="w-full h-full relative flex flex-col items-center">
	<!-- Background -->
	<div class="absolute -z-10 top-0 left-0 background-gradient w-full h-full">
		<div class="w-full h-full circles">
			<Circles />
		</div>
	</div>

	<!-- Main content -->
	<div class="w-full h-full flex flex-col items-stretch max-w-lg">
		<div class="text-white font-bold text-4xl py-10 px-6">Your TODO's</div>

		<div class="flex-grow overflow-y-auto">
			<TodoList items={$todos} />
		</div>
	</div>

	<!-- Drawer -->
	<div class="pointer-events-none absolute w-full h-full top-0 left-0 flex flex-col justify-end items-center pt-4">
		<Drawer hide={todoOpen} />
	</div>
</div>

<style>
	.background-gradient {
		background: linear-gradient(180deg, #ffb6b9 0%, #a5dee5 100%);
		background-color: white;
	}

	.circles {
		filter: blur(100px);
	}
</style>
