export default class Layout {
    readonly name: string;
    constructor(name: string);
    move(x: number, y: number): void;
    resize(w: number, h: number): void;
}
