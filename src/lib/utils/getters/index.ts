import type { TodoList } from '$lib/interfaces/todoList';
import { todos } from '$ts/stores';
import { get } from 'svelte/store';

export function getListData(id: string): TodoList {
	return get(todos).find((x) => x.id === id);
}
