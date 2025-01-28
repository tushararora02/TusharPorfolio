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
    },{
      title: 'Code Generation Tool using Spring AI',
      technologiesused: 'This application enables users to generate code based on the programming language and description of code provided by the users.',
      description: [
            'I developed an intelligent code generation tool that automates the creation of code based on the programming language and decription of requirement using OpenAPI specifications.Leveraging Spring AI, the tool ensures efficient, consistent, and scalable code generation for backend development, reducing manual effort and speeding up API delivery.' ],
    },
    {
      title: 'Extracting Ingredients from Image Text Using Tesseract and OpenAI',
      technologiesused: "This project aims to create a system that extracts ingredients from a text captured in an image. The workflow includes using Tesseract OCR to extract text from the image and OpenAI's GPT model to process the extracted text and identify ingredient-related terms. The system is designed for use in food-related applications, such as recipe creation, nutritional analysis, or grocery management.",
      description: [
            'I developed this project using Tesseract OCR that extracts text from images and then passing this text to OpenAI GPT Model that is capable of understanding context and extracting specific ingredients from text. For backend I used Spring AI for building API to handle image uploads, text processing, and result delivery.' ],
    }
  ];
}
