import Button from "./interface/Buttun";

export interface ElementCreationOptions {
    classList?: string[];
    text?: string;
    src?: string;
    append?: HTMLElementTagNameMap[keyof HTMLElementTagNameMap][]
}

export const createElement = <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K] => {
    const element: HTMLElementTagNameMap[K] = document.createElement(tagName);

    if (options.classList !== undefined) element.classList.add(...options.classList);
    if (options.text !== undefined) element.innerText = options.text;
    if (options.src !== undefined && "src" in element) element.src = options.src;
    if (options.append !== undefined) element.append(...options.append);

    return element;
}

const label = createElement("div", {
    classList: ["label"],
    append: [
        createElement("span", { text: "kour", classList: ["hostname"] }),
        createElement("span", { text: ".io", classList: ["extention"] })
    ]
});

const title = createElement("h1", {
    classList: ["title"],
    text: "Comming soon!"
});

const buttons = createElement("div", {
    classList: ["buttons"],
    append: [
        new Button("discord", { href: "https://discord.com/invite/n3WYRCn3g7" }).element,
        new Button("twitter", { href: "https://twitter.com/intent/user?screen_name=KourGame" }).element,
        new Button("youtube", { href: "https://www.youtube.com/channel/UC1GQ1HXfktPYKz4wPk2VpHg?sub_confirmation=1" }).element
    ]
});

const preview = createElement("img", { src: "/image/preview.png", classList: ["preview"] })

document.body.append(
    label,
    title,
    buttons,
    preview
)

console.log("1")