import { derived, writable } from "svelte/store";

export const todos = writable([]);
todos.set([
    {
        done: false,
        title: "Shopping list",
        list: [
            { title: "Do something...", done: true },
            { title: "Do something...", done: false },
            { title: "Do something...", done: true },
        ],
    },
    {
        done: true,
        title: "Homework",
        list: [
            { title: "Do something...", done: true },
            { title: "Do something...", done: false },
            { title: "Do something...", done: true },
        ],
    },
]);

export const todosWithId = derived(todos, ($todos) =>
    $todos.map((elem, id) => {
        return { id, ...elem };
    })
);

export const selectedTodo = writable(null);
export const openedDrawer = writable(false);
