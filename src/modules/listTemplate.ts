import { hasProjects } from "../interfaces/hasProject.js";
export class ListTemplate {
    constructor(
        private container : HTMLUListElement
    ){}

    render(project: hasProjects): void{
        const li = project.createProject();
        this.container.prepend(li);
    }
}