import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay: Project;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['id'];
    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
    this.projectToDisplay = new Project(dataLastEmittedFromObserver.title,
                                    dataLastEmittedFromObserver.dateAdded,
                                    dataLastEmittedFromObserver.dateEnding,
                                    dataLastEmittedFromObserver.picture,
                                    dataLastEmittedFromObserver.currentDonations,
                                  dataLastEmittedFromObserver.goal,
                                  dataLastEmittedFromObserver.description,
                                  dataLastEmittedFromObserver.location,
                                  dataLastEmittedFromObserver.backerNumber)

                                  console.log(this.projectToDisplay);
    });
  }

}
