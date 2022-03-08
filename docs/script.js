import { Active } from "./modules/activeList.js";
import { Complete } from "./modules/completeList.js";
import { ListTemplate } from "./modules/listTemplate.js";
import * as reqElements from "./modules/getElements.js";
let projectCount = 0;
const activeList = new ListTemplate(reqElements.actList);
const completeList = new ListTemplate(reqElements.comList);
const clearForm = () => {
    reqElements.title.value = '';
    reqElements.details.value = '';
    reqElements.people.value = '';
    reqElements.status.value = '';
};
reqElements.form.addEventListener('submit', (event) => {
    event.preventDefault();
    let projects;
    let values = [reqElements.title.value, reqElements.people.valueAsNumber, reqElements.details.value];
    if (reqElements.status.value == '1') {
        projectCount++;
        projects = new Active(...values, projectCount);
        activeList.render(projects);
    }
    else {
        projects = new Complete(...values, projectCount);
        projectCount++;
        completeList.render(projects);
    }
    clearForm();
});
reqElements.actList.addEventListener('click', (e) => {
    var _a;
    let target = e.target;
    let li = target.parentNode;
    let id = li.id;
    let title = li.childNodes[0].textContent;
    title = title;
    let people = li.childNodes[1].childNodes[0].textContent;
    people = people;
    let details = li.childNodes[2].textContent;
    details = details;
    let values = [title, people, details];
    let completed = new Complete(...values, id);
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.remove();
    completeList.render(completed);
});
reqElements.comList.addEventListener('click', (e) => {
    var _a;
    let target = e.target;
    let li = target.parentNode;
    let id = li.id;
    let title = li.childNodes[0].textContent;
    title = title;
    let people = li.childNodes[1].childNodes[0].textContent;
    people = people;
    let details = li.childNodes[2].textContent;
    details = details;
    let values = [title, people, details];
    let actived = new Active(...values, id);
    (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.remove();
    activeList.render(actived);
});
