import { Autobind } from "../decorators/autobind";
import { Validatable } from "../models/interfaces/Validable";
import { validate } from "../util/validate";
import { BaseComponent } from "./base-components";
import { projectState } from "../state/ProjectState";

export class ProjectInput extends BaseComponent<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    peopleElement: HTMLInputElement;
    submitButton: HTMLButtonElement;

    constructor(){
        super("project-input", "app", true, "user-input")
       
        this.configure()
    }

    private gatherUserInput(): [string, string, number] | void{
        const enteredTitle: Validatable = {
            value: this.titleInputElement.value,
            required: true
        }

        const enteredDescription: Validatable = {
            value: this.descriptionElement.value,
            required: false
        }

        const enteredPeople: Validatable = {
            value: +this.peopleElement.value,
            required: true
        }

        const titleValid = validate(enteredTitle);
        const descValid = validate(enteredDescription);
        const peopleValid = validate(enteredPeople);

        if(!titleValid || !descValid || !peopleValid){
            alert("Invalid input, please try again");
            return;
        }

        console.log("User Input valid!")
        return [this.titleInputElement.value, this.descriptionElement.value, +this.peopleElement.value];


    }

    private clearInputs(){
        this.titleInputElement.value = "";
        this.descriptionElement.value = "";
        this.peopleElement.value = "";
    }

    @Autobind
    private submitHandler(event: Event){
        event.preventDefault();
        const userInput = this.gatherUserInput();

        if(Array.isArray(userInput)){
            const [title, description, people] = userInput;
            projectState.addProject(title, description, people);
            this.clearInputs();
        }
    }

    configure(){

        this.titleInputElement = this.element.querySelector("#title")! as HTMLInputElement;
        this.descriptionElement = this.element.querySelector("#description")! as HTMLInputElement;
        this.peopleElement = this.element.querySelector("#people")! as HTMLInputElement;

        this.element.addEventListener("submit",  this.submitHandler)
    }

    renderContent(): void {
        
    }
}