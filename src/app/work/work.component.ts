import { Component } from '@angular/core';
import { Skill, WorkExperience } from '../model/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  workExpList: WorkExperience[] = [
    {
      role: 'IT Developer/Analyst',
      company: 'Canada Revenue Agency',
      duration: 'Aug 2024 - Present',
      description: [
        'Develop and design CRA application using Angular with reusable and modular components, ensuring consistency and maintainability across the application.',
        'Work closely with back-end developers to integrate web applications with server-side APIs and Implement data exchange mechanisms to retrieve and display dynamic content.',
        'Provide technical leadership by mentoring junior and mid-level developers, conducting code reviews, and ensuring adherence to best practices in Spring Boot and Java development.',
        'Implement, and manage CI/CD pipelines using Jenkins to automate build, test, and deployment processes across development, staging,and production environments.',
        'Implement advanced routing strategies, including lazy-loaded modules and route guards, to improve application security and navigation flow.',
        'Guide Junior developers and provide mentorship. Review code, set standards, and enforce best practices for Angular development within the team.',
        'Configure Splunk forwarders to collect logs and system metrics from a variety of sources, such as web servers, application servers, and databases.',
      ],
    },
    {
      role: 'IT Developer',
      company: 'Canada Revenue Agency',
      duration: 'Aug 2023 - Aug 2024',
      description: [
        'Develop complex forms using Reactive Forms (e.g., FormGroup,FormControl, FormBuilder), enabling dynamic validation and control.',
        "Setup Angular's Router for page navigation, including parameterized routes and nested routes.",
        'Handle RESTful API calls with Angular’s HttpClientModule to interact with back-end systems, implementing GET, POST, PUT, and DELETE operations.',
        "Use RxJS for handling asynchronous operations, making use of operators like map, switchMap, mergeMap, and concatMap for better management of observables and streams.",
        "Use Git for version control to manage source code, track changes,and use JIRA to create and manage a project flow to organize tasks, streamline processes, and improve collaboration among team members.",
        "Develop complex custom Angular directives and pipes to manipulate DOM elements and data within the application.",
        "Write testable code and implement test cases for components, services, directives, and pipes, ensuring robustness and preventing regression issues.",
        'Develop complex microservices using Spring Boot,and Spring Data. Design highly available, fault-tolerant, and scalable microservices with RESTful APIs.',

      ],
    },
    {
      role: 'Senior System Engineer',
      company: 'Infosys Limited',
      duration: 'Jan 2021 - Apr 2022',
      description: [
        'Work as an Infosys certified developer, proficient in SpringBoot, Spring MVC, Java , JUnit, JPA, and databases including MySQL and SQL Server.',
        'Configure Spring Cloud LoadBalancer for load distribution and failover handling between multiple instances of microservices.',
        'Implement caching strategies using Redis to optimize performance and reduce database load and implement resilience patterns like circuit breakers (e.g.Hystrix) to prevent cascading failures in the system.',
        'Mentored 5 developers, conducted code reviews, recommended optimization techniques, and implemented design patterns to support architectural development by creating scalable, maintainable, and flexible solutions tailored to the project’s needs.',
        'Secure microservices using Spring Security and JWT tokens, managing authentication and authorization across services.',
        'Analyze and resolve production issues, ensuring seamless operation and minimal downtime for critical applications.',
        'Configure Lambda to upload the files to S3 bucket and send email notifications (via SNS) to users.',
        'Utilized CloudWatch Logs to capture and analyze Lambda execution logs for debugging and performance tuning and configured CloudWatch Metrics to monitor invocation count, and error rates for serverless functions',
        'Configure Dynatrace for Cloud Monitoring to provide insights into cloud performance, scalability, and resource utilization, ensuring optimized resource allocation.'
      ],
    },
    {
      role: 'System Engineer',
      company: 'Infosys Limited',
      duration: 'Jan 2019 - Jan 2021',
      description: [
        'Develop and maintain RESTful APIs and Microservices using Spring Boot and Java, ensuring each service is modular, scalable, and loosely coupled.',
        'Use RestTemplate for synchronous inter-service communication within a microservices architecture and configure RestTemplate error handling and retry mechanisms to ensure resilient communication across microservices.',
        'Implement database configurations using Spring Data JPA and Spring Data MongoDB, managing transactions effectively to ensure data consistency.',
        'Write unit tests using JUnit and MockMvc to validate microservice functionality and REST API behavior.',
        'Implement centralized exception handling in microservices using @ControllerAdvice and @ExceptionHandler annotations.',
        "Implement serverless architectures with Spring Cloud Function and cloud providers' serverless compute services." ,
        'Configure Swagger to generate comprehensive API documentation for each microservice, ensuring clear and consistent API definitions.',
        'Use SonarQube or other static code analysis tools to ensure high code quality and enforce coding standards.',
        'Use Spring Boot Actuator and Micrometer for monitoring and performance tracking, enabling detailed metrics collection for both system health and application performance.'
      ],
    },
  ];

  

}
