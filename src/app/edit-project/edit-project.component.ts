import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate) {
    console.log("works");
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("are you sure you want to delete?")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
