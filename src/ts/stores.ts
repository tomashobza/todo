import type { TodoList } from '$lib/interfaces/todoList';
import { db } from '$lib/utils/misc/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { derived, get, writable, type Writable } from 'svelte/store';
import { dumpSavedTodos, fetchTodoListData } from '.';

/** Store that represents the `id`s of TODOs that are save in `localStorage` */
export const savedTodos = writable<string[]>([]);

// Update ids when the user moves a list card
savedTodos.subscribe((ids) => ids.length && dumpSavedTodos(ids));

// Saved listeners
const listeners: { id: string; listener: any }[] = [];

/** Store that represents data of stored TODOs that need to be fetched from firestore. */
export const todos = derived<typeof savedTodos, TodoList[]>(savedTodos, (ids: string[], set) => {
	// Remove listeners
	listeners.forEach((x) => x.listener());

	// Set up new listeners
	const datas = ids.map((id) => ({ id } as TodoList));

	datas.forEach((data) => {
		const listener = onSnapshot(doc(db, 'todos/', data.id), (snap) => {
			const snapData = snap.data();

			Object.assign(data, snapData);

			data.list = snapData.list || [];

			set(datas as TodoList[]);

			// Update selected todo store if needed
			if (data.id === get(selectedTodo)?.id) {
				selectedTodo.set(data);
			}
		});

		listeners.push({ id: data.id, listener });
	});

	set(datas as TodoList[]);
});

/** Store that represents the data of currently open TODO */
export const selectedTodo = writable(null);

/** Store that represents the open/closed state of the drawer. */
export const openedDrawer = writable(false);

/** Store that represents an array of popups that are displayed.  */
export const popups = writable([]);

/** Store that represents the TODO ID of the currently prompted TODO.  */
export const modal = writable(null);
