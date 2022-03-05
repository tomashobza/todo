import { popups } from "./stores";

export function popup(label: string, color: "good" | "bad") {
    popups.update(x => [...x ,{ label, color }]);
}

export function closePopup(index: number) {
    popups.update(x => x.filter((x, i) => i != index));
}