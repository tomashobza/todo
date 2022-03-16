import type { TodoItem } from './Todoitem';

export interface TodoList {
	id: string;
	done: boolean;
	title: string;
	list: TodoItem[];
}
