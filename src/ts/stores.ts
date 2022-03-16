import { derived, writable } from "svelte/store";

/** Store that represents the `id`s of TODOs that are save in `localStorage` */
export const savedTodos = writable([]);

/** Store that represents data of stored TODOs that need to be fetched from firestore. */
export const todos = derived(savedTodos, ($savedTodos) => {
    // TODO change this to fetch data from firestore

    // DEV
    return $savedTodos?.map(x => {
        // !!! THIS OBJECT STRUCTURE NEEDS TO BE KEPT
        return {
            id: x,
            done: false,
            title: "Shopping list",
            list: [
                { title: "Do something...", done: true },
                { title: "Do something...", done: false },
                { title: "Do something...", done: true },
            ],
        };
    }) || [];
});

/** Store that represents the data of currently open TODO */
export const selectedTodo = writable(null);

/** Store that represents the open/closed state of the drawer. */
export const openedDrawer = writable(false);

/** Store that represents an array of popups that are displayed.  */
export const popups = writable([]);

/** Store that represents the TODO ID of the currently prompted TODO.  */
export const modal = writable(null);
