import { Component } from '@angular/core';
import { Education, Skill } from '../model/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {


  aboutMe: string[] = [
    'I am a highly skilled Software Developer with 5 years of experience in the software industry, specializing as a Full Stack Developer. I am proficient in Java, JavaScript, Angular, and Spring Boot, with a strong focus on building scalable and efficient applications. My expertise also includes designing and developing RESTful APIs, implementing Microservices Architecture, and working with both SQL (MySQL) and NoSQL (MongoDB) databases. Additionally, I have foundational knowledge of cloud services, including compute, storage, and networking, across major platforms such as AWS, Google Cloud, and Azure. As a collaborative team player with strong communication skills, I am eager to contribute my technical expertise in dynamic, fast-paced environments through full-time opportunities.'
  ];

  
  programming_language: Skill[] = [
    {
      name: 'Typescript',
      image:'typescript.png'
    },
    {
      name: 'Python',
      image:'python.png'
      
    },
    {
      name: 'JavaScript',
      image:'javascript.png'
      
    },
    {
      name: 'Java',
      image:'java.png'
      
    }
  ];

  web_technologies: Skill[] = [
    {
      name: 'SpringBoot',
      image:'springboot.jpg'
    },
    {
      name: 'Angular',
      image:'angular.png'
      
    },
    {
      name: 'NodeJs',
      image:'nodejs.png'
      
    },
    {
      name: 'React',
      image:'react.png'
      
    },
    {
      name: 'CSS/HTML',
      image:'html_css.png'
      
    }
  ];

  database: Skill[] = [
    {
      name: 'NoSQL',
      image:'nosql.png'
    },
    {
      name: 'SQL',
      image:'sql.png'
      
    },
    {
      name: 'AWS DynamoDB',
      image:'dynamodb.png'
      
    },
    {
      name: 'AWS S3',
      image:'s3.png'
      
    },
    {
      name: 'MongoDB',
      image:'mongodb.png'
    },
    {
      name: 'GraphQL',
      image:'graphql.png'
    },

  ];

  cloud_technologies: Skill[] = [
    {
      name: 'AWS',
      image:'aws.png'
    },
    {
      name: 'Azure',
      image:'azure.jpg'
      
    },
    {
      name: 'GCP',
      image:'gcp.png'
      
    }

  ];

  other_technologies: Skill[] = [
    {
      name: 'Git',
      image:'git.png'
    },
    {
      name: 'Docker',
      image:'docker.png'
      
    },
    {
      name: 'Jira',
      image:'jira.png'
      
    }

  ];

  monitoring_tools: Skill[] = [
    {
      name: 'Amazon CloudWatch ',
      image:'cloudwatch.png'
    },
    {
      name: 'Splunk',
      image:'splunk.png'
      
    },
    {
      name: 'Dynatrace',
      image:'dynotrace.png'
      
    }

  ];

 

  

}
