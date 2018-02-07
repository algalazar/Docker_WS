export class Todo {
    id: number;
    name: string;
    isComplete: boolean;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.isComplete = false;
    }
}
