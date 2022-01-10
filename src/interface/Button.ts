export default class Button {

    public readonly element: HTMLDivElement = document.createElement("div");

    private readonly label: HTMLSpanElement = document.createElement("span")

    set text(value: string) {
        if (typeof value !== "string")
            throw new TypeError("Cannot read value \"" + value + "\" of type \"" + typeof value + "\"");

        if (value.length == 0)
            throw new Error("Refused read value \"" + value + "\" of length \"" + value.length + "\"");

        this.label.innerText = value;
    }

    get text(): string {
        return this.label.innerText;
    }

    constructor(text?: string, options?: { href?: string }) {

        if (text !== undefined) this.text = text;

        this.corner("left", "top");
        this.corner("left", "bottom");
        this.corner("right", "top");
        this.corner("right", "bottom");

        this.element.append(this.label);
        this.label.classList.add("label");

        if (options && options.href) -
            this.element.addEventListener("click", () => window.open(options.href))
    }


    private corner(x: "left" | "right", y: "top" | "bottom"): void {
        const span: HTMLSpanElement = document.createElement("span")

        span.classList.add("corners", x, y);

        this.element.append(span)
    }

}