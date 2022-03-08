import { hasProjects } from "./interfaces/hasProject.js";
import { Active } from "./modules/activeList.js";
import { Complete } from "./modules/completeList.js";
import { ListTemplate } from "./modules/listTemplate.js";
import * as reqElements from  "./modules/getElements.js";

let projectCount = 0;
const activeList = new ListTemplate(reqElements.actList);
const completeList = new ListTemplate(reqElements.comList);

const clearForm = () => {
    reqElements.title.value = '';
    reqElements.details.value = '';
    reqElements.people.value = '';
    reqElements.status.value = '';
}
reqElements.form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();
    let projects: hasProjects;

    let values: [string, number, string] = [reqElements.title.value, reqElements.people.valueAsNumber, reqElements.details.value];
    
    if(reqElements.status.value == '1'){
        projectCount++;
        projects = new Active(...values, projectCount);
        activeList.render(projects);
    } else {
        projects = new Complete(...values, projectCount);
        projectCount++;
        completeList.render(projects);
    }   
    clearForm();
});

reqElements.actList.addEventListener('click', (e: Event) => {
    let target = <HTMLButtonElement> e.target
    let li: HTMLLIElement = <HTMLLIElement> target.parentNode;
    let id: any = li.id;
    
    let title: any = li.childNodes[0].textContent;
    title = <String> title;
    let people: any = li.childNodes[1].childNodes[0].textContent;
    people = <Number> people;
    
    let details: any = li.childNodes[2].textContent;
    details = <String> details;
    
    let values: [string, number, string] = [title, people, details];

    let completed = new Complete(...values, id);
    document.getElementById(id)?.remove();
    completeList.render(completed);
});

reqElements.comList.addEventListener('click', (e: Event) => {
    
    let target = <HTMLButtonElement> e.target
    let li: HTMLLIElement = <HTMLLIElement> target.parentNode;
    let id: any = li.id;
    
    let title: any = li.childNodes[0].textContent;
    title = <String> title;
    
    let people: any = li.childNodes[1].childNodes[0].textContent;
    people = <Number> people;
    
    let details: any = li.childNodes[2].textContent;
    details = <String> details;
    
    let values: [string, number, string] = [title, people, details];

    let actived = new Active(...values, id);
    document.getElementById(id)?.remove();
    activeList.render(actived);
})