import { Autobind } from "../decorators/autobind";
import { Project } from "../models/classes/Project";
import { Draggable } from "../models/interfaces/DragDrop";
import { BaseComponent } from "./base-components";

export class ProjectItem extends BaseComponent<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;


    constructor(hostId: string, project: Project){
        super("single-project", hostId, false, project.id)
        this.project = project;
        
        this.configure();
        this.renderContent();
    }


    configure(): void {
        this.element.addEventListener("dragstart", this.dragStartHandler);
        this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent(): void {
        this.element.querySelector("h2")!.textContent = this.project.title;
        this.element.querySelector("h3")!.textContent = `${this.project.people} ${this.project.getPeopleText} assigned.s`;
        this.element.querySelector("p")!.textContent = this.project.description;
        
    }
    
    @Autobind
    dragStartHandler(event: DragEvent): void {
        event.dataTransfer!.setData("text/plain", this.project.id);
        event.dataTransfer!.effectAllowed = "move";
    }

    @Autobind
    dragEndHandler(_: DragEvent): void {
        console.log("DragEnd", event)
    }

}