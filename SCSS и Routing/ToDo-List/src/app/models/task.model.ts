export class Task {
    public name: string;
    public description: string;

    constructor(id: number, name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
