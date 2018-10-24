import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string,
     dateAdded: string,
     dateEnding: string,
     picture: string,
     currentDonations: number,
     goal: number,
     description: string,
     location: string,
     backerNumber: number) {
       var newProject: Project = new Project(title, dateAdded, dateEnding, picture, currentDonations, goal, description, location, backerNumber);
       this.projectService.addProject(newProject);
     }
}
