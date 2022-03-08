import { hasProjects } from "../interfaces/hasProject.js";

export class Complete implements hasProjects{
    constructor(
        readonly Title: string,
        readonly Persons: number,
        readonly Descriprion: string,
        public id: number
    ){}

    private getId(): string{
        let id: any = this.id;
        return <string> id;
    }

    createProject(): HTMLLIElement{
        const li = document.createElement('li');
        li.className = 'project';
        li.id = this.getId();
        
        const h4 = document.createElement('h4');
        h4.className = 'title';
        h4.textContent = this.Title;
        li.append(h4);
        
        const p = document.createElement('p');
        p.className = 'persons';
        p.textContent = `${this.Persons} persons assigned`;
        li.append(p);
        
        const h4Des = document.createElement('h4');
        h4Des.className = 'description';
        h4Des.textContent = this.Descriprion;
        li.append(h4Des);
        
        const btn = document.createElement('button');
        btn.className = 'btn btn-deact'
        btn.textContent = 'Active';
        li.append(btn);

        return li;
    }
}