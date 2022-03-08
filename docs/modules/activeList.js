export class Active {
    constructor(Title, Persons, Descriprion, id) {
        this.Title = Title;
        this.Persons = Persons;
        this.Descriprion = Descriprion;
        this.id = id;
    }
    getId() {
        let id = this.id;
        return id;
    }
    createProject() {
        const li = document.createElement('li');
        li.className = 'project';
        li.id = this.getId();
        const h4 = document.createElement('h4');
        h4.className = 'title';
        h4.textContent = this.Title;
        li.append(h4);
        const p = document.createElement('p');
        p.className = 'persons';
        const span = document.createElement('span');
        span.textContent = `${this.Persons}`;
        p.appendChild(span);
        p.append(' persons assigned');
        li.append(p);
        const h4Des = document.createElement('h4');
        h4Des.className = 'description';
        h4Des.textContent = this.Descriprion;
        li.append(h4Des);
        const btn = document.createElement('button');
        btn.className = 'btn btn-act';
        btn.textContent = 'Complete';
        li.append(btn);
        return li;
    }
}
