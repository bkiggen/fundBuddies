import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
    // console.log(this);
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
    console.log("hello");
    this.projects.push(newProject);
  }

  updateProject(localUpdatedProject) {
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title, dateAdded: localUpdatedProject.dateAdded, dateEnding: localUpdatedProject.dateEnding, picture: localUpdatedProject.picture, currentDonations: localUpdatedProject.currentDonations, goal: localUpdatedProject.goal, description: localUpdatedProject.description, location: localUpdatedProject.location, backerNumber: localUpdatedProject.backerNumber });
    alert("Well done!");
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  deleteProject(localProjectToDelete) {
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }
}
