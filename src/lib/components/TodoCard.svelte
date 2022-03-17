<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import MoveHolder from '$lib/svg/MoveHolder.svelte';
	import { omitId } from '$lib/utils/misc/withoutId';
	import { updateTodoListData } from '$ts/index';
	import { selectedTodo } from '$ts/stores';
	import Tick from './Tick.svelte';

	export let todo: {
		id: string;
		done: boolean;
		title: string;
	} = {
		id: '',
		done: false,
		title: 'unknown title'
	};

	let open = false;

	$: if (!$selectedTodo) open = false;

	function tickSwitch() {
		todo.done = !todo.done;

		updateTodoListData(todo.id, omitId(todo));
	}

	function openTodo() {
		if ($selectedTodo) {
			selectedTodo.set(null);
			return;
		}

		$page.url.searchParams.set('id', todo?.id);
		goto(`?${$page.url.searchParams.toString()}`);

		selectedTodo.set(todo);

		open = true;
	}
</script>

<div class="w-full rounded-2xl bg-white px-6 flex flex-row items-center gap-4">
	<div>
		<Tick ticked={todo.done} on:click={tickSwitch} />
	</div>
	<div class="font-bold flex-grow h-full truncate py-7 transition duration-500" class:line-through={todo.done} class:opacity-0={!todo.title} on:click={openTodo}>
		{todo.title}
	</div>
	<div class="w-4 h-4 text-gray-500">
		<MoveHolder {open} />
	</div>
</div>
