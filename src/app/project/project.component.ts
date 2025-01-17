import { Component } from '@angular/core';
import { Project } from '../model/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Movie Booking App',
      technologiesused: 'This application enables users to book tickets and allows theatre owners to post movie details.',
      description: [
        
       'I adhered to design patterns and SOLID principles, utilizing GitLab CI/CD pipelines along with Heroku for continuous integration and deployment. Additionally, I implemented Test-Driven Development (TDD) and followed clean coding practices throughout the application’s development.'
      ],
    },
    {
      title: 'Food Delivery System',
      technologiesused: 'This application enables users to place food orders from restaurants and allows restaurant owners to receive orders and manage their restaurant details.',
      description: [
            'I developed a serverless food delivery system using a multi-cloud deployment model and Backend-as-a-Service (BaaS). The application was built, tested, and deployed across two cloud platforms—AWS and GCP. The frontend was developed in ReactJS, while the backend utilized AWS services. The frontend application was hosted on GCP Cloud Run, and the backend was deployed using AWS CloudFormation.' ],
    }
  ];
}
