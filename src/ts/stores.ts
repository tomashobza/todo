import type { TodoList } from '$lib/interfaces/todoList';
import { derived, writable, type Writable } from 'svelte/store';
import { fetchTodoListData } from '.';

/** Store that represents the `id`s of TODOs that are save in `localStorage` */
export const savedTodos = writable<string[]>([]);

/** Store that represents data of stored TODOs that need to be fetched from firestore. */
export const todos = derived<typeof savedTodos, TodoList[]>(savedTodos, (ids: string[], set) => {
	async function fetchLists() {
		const lists: TodoList[] = [];

		for (const id of ids) {
			const list = await fetchTodoListData(id);
			lists.push(list);
		}

		set(lists);
	}

	fetchLists();
});

/** Store that represents the data of currently open TODO */
export const selectedTodo = writable(null);

/** Store that represents the open/closed state of the drawer. */
export const openedDrawer = writable(false);

/** Store that represents an array of popups that are displayed.  */
export const popups = writable([]);

/** Store that represents the TODO ID of the currently prompted TODO.  */
export const modal = writable(null);
