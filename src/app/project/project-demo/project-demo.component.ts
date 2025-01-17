import { Component } from '@angular/core';
import { ProjectDemo } from 'src/app/model/models';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.css']
})
export class ProjectDemoComponent {
  projectDemo: ProjectDemo[] = [
    {
      title: 'Springboot Email Scheduler',
      image:'folder.png',
      url:"https://github.com/tushararora02/Spring_Boot_Email_Scheduler"
    },
    {
      title: 'Springboot Email Sender',
      image:'folder.png',
      url:"https://github.com/tushararora02/Spring_Boot_Email_Sender"
    },
    {
      title: 'Springboot Swagger',
      image:'folder.png',
      url:"https://github.com/tushararora02/springboot-swagger"
    },{
      title: 'Springboot Redis',
      image:'folder.png',
      url:"https://github.com/tushararora02/springboot-redis"
    },
    {
      title: 'Springboot JWT Auth',
      image:'folder.png',
      url:"https://github.com/tushararora02/spring-jwt-auth"
    },
    {
      title: 'Spring Cloud',
      image:'folder.png',
      url:"https://github.com/tushararora02/Spring_Cloud"
    },{
      title: 'Spring Cloud Netflix Ribbon',
      image:'folder.png',
      url:"https://github.com/tushararora02/Spring_Cloud_Netflix_Ribbon"
    },
    {
      title: 'Springboot Hystrix',
      image:'folder.png',
      url:"https://github.com/tushararora02/Spring_Boot_Hystrix"
    },
    {
      title: 'Springboot Microservices Demo',
      image:'folder.png',
      url:"https://github.com/tushararora02/Microservices-demo"
    },{
      title: 'Springboot Drool Demo',
      image:'folder.png',
      url:"https://github.com/tushararora02/DroolDemo"
    },
    {
      title: 'Springboot Docker Demo',
      image:'folder.png',
      url:"https://github.com/tushararora02/DockerDemo"
    },
    {
      title: 'Design Pattern',
      image:'folder.png',
      url:"https://github.com/tushararora02/Design_Pattern"
    }
  ];

  getImageurl(skillname:string){
    console.log(skillname);
    return "../../assets/"+skillname;
  }
  openLink(url:string){
    window.open(url, "_blank");
  }

}
