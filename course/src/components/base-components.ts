// Component Base Class

export abstract class BaseComponent<THostElement extends HTMLElement, TElement extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: THostElement;
    element: TElement;
    insertAtStart: boolean;

    constructor(
         templateId: string,
         hostElementId: string,
         insertAtStart: boolean,
         newElementId?: string
         ){
            this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement
            this.hostElement = document.getElementById(hostElementId)! as THostElement
            
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild as TElement;
            if(newElementId){
                this.element.id = newElementId;
            }

            this.attach(this.insertAtStart);
        }

    private attach(insertAtStart: boolean){
        this.hostElement.insertAdjacentElement(this.insertAtStart ? "afterbegin" : "beforeend", this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;
}