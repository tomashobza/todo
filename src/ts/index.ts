import { get } from "svelte/store";
import { modal, popups, savedTodos } from "./stores";

/** Shows a popup by pushing new popup to the array of popups. */
export function popup(label: string, color: "good" | "bad") {
    popups.update(x => [...x ,{ label, color }]);
}

/** Closes a popup by it's index in the array of popups. */
export function closePopup(index: number) {
    popups.update(x => x.filter((x, i) => i != index));
}

/** Loads the `id`s of saved TODOs from the local storage. */
export function loadSavedTodos() {
    savedTodos.set(JSON.parse(localStorage.getItem("todos")));
}

/** Saves a TODO `id` to the local storage. */
export function saveTodo(todoId: string) {
    localStorage.setItem("todos", JSON.stringify([ ...get(savedTodos), todoId]));
    loadSavedTodos();
}

/** Opens a modal for a set TODO `id`. */
export function openModal(todoId: string) {
    modal.set(todoId);
}

/** Checks if the TODO exists in Firestore. If yes, saves the TODO `id`. */
export function addTodo(todoId: string) {
    // TODO fetch todo data

    // if TODO was found in Firestore
    saveTodo(todoId);
}


/** Creates a new TODO instance in database with set `title`. */
export function createTodo(title: string) {
    // TODO create new TODO instance in database with `title`

    // if successful
    // saveTodo(*new TODO id*);
}