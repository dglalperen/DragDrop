import { Project } from "../models/classes/Project";
import { State } from "../models/classes/State";
import { ProjectStatus } from "../models/enums/ProjectStatus";

export class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor(){
        super();
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, people: number){
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            people,
            ProjectStatus.Active);

        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus){
        const project = this.projects.find(prj => prj.id === projectId);
        if(project && project.status !== newStatus){
            project.status = newStatus;
            this.updateListeners();
        }
    }

    private updateListeners(){
        for (const listenerFunction of this.listeners){
            listenerFunction(this.projects.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();
