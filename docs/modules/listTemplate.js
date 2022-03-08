export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(project) {
        const li = project.createProject();
        this.container.prepend(li);
    }
}
