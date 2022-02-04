import { derived, writable } from "svelte/store";

export const todos = writable([]);
todos.set([
    { done: false, title: "Shopping list" },
    { done: true, title: "Homework" },
]);

export const todosWithId = derived(todos, ($todos) =>
    $todos.map((elem, id) => {
        return { id, ...elem };
    })
);

export const selectedTodo = writable(null);
