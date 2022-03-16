<script>
	import Main from '$lib/components/Main.svelte';
	import { page } from '$app/stores';
	import { modal, savedTodos, selectedTodo, todos } from '$ts/stores';
	import { loadSavedTodos } from '$ts/index';
	import { browser } from '$app/env';

	/** Tries to open the TODO via `id` from the URL query string. */
	function openSelected(tId) {
		loadSavedTodos();
		let indexOfSelected = null;
		indexOfSelected = $savedTodos.findIndex((elem) => elem == tId);

		if (indexOfSelected < 0) {
			modal.set(tId);
		} else if (indexOfSelected >= 0) {
			if ($todos[indexOfSelected]) selectedTodo.set($todos[indexOfSelected]);
		}
	}

	const id = $page.url.searchParams.get('id');
	$: if (id && $savedTodos && browser) openSelected(id);
</script>

<Main />
