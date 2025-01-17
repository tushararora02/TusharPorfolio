import { Component } from '@angular/core';
import { Project, ProjectDemo, WorkExperience } from '../model/models';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent {
  certificates: ProjectDemo[] = [
    {
      title: 'Microsoft Certified:Azure Fundamentals',
      image:'microsoft certificate.png',
      url:"https://drive.google.com/file/d/1qZOlOrtZj4kAjTdojiECT8JZ-BzpgwxO/view"
    },
    {
      title: 'Insta Award',
      image:'instaaward.jpeg',
      url:"https://drive.google.com/file/d/1L7yy7d404QmHKbtHokRJEMCWbcc0ux_s/view?usp=drive_link"
    },{
      title: 'Infosys Certified Spring Boot Developer',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1nGY7yXTLJWe5u_IVzjavWRZPsYJvVydm/view?usp=drive_link"
    },
    {
      title: 'Object Oriented Programming using Python',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1TN4kNw4PXhkJ1ub9pG6ZvzPxfz_IfujN/view?usp=drive_link"
    },
    {
      title: 'Programming Fundamentals using Python',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1L9FRTbfjl4tOk-0TOMd-sBG9OzKMjIJr/view?usp=drive_link"
    },{
      title: 'Data Structures and Algorithms using Python',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1DNkF2PeqhKBhPEWeLeieBxA9m3LHtZk-/view?usp=drive_link"
    },{
      title: 'Developing Modern Apps using Angular',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1KC_S9O6s9ynflahTUVoIr_vZvuxvgbPC/view?usp=drive_link"
    },
    {
      title: 'Spring Microservices',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1J_LXi36OojeN1sZGnM8yca1fVaqHKke1/view?usp=drive_link"
    },
    {
      title: 'Web API Development using Spring REST with SpringBoot',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1WAfeOpVJXipjCG-4HbCXN2UGgdty77Uq/view?usp=drive_link"
    },{
      title: 'Spring Data JPA with Boot',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1EcoISBCatLd8HFCw0xshYKpPx7G9c764/view?usp=drive_link"
    },{
      title: 'Spring Cloud Function',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1Ums8du5Ycl60TUQcFps-hr3Ez6CQSD1y/view?usp=drive_link"
    },
    {
      title: 'Spring Security Using Keycloak',
      image:'certification.png',
      url:"https://drive.google.com/file/d/1V_9jb7MrK1neby3giZ1aiaATTd7rieQs/view?usp=drive_link"
    }
    
  ];

  certificatesList: Project[] = [
    {
      title: 'Training and Certificates',
      technologiesused: 'Aug 2015 - Now',
      description: [
        'Microsoft certified Azure Fundamental AZ-900.',
        'Infosys certified SpringBoot Developer.',
        'Insta Award for handling and leading team through critical timeline'
      ],
    }
  ]

  getImageurl(skillname:string){
    console.log(skillname);
    return "../../assets/"+skillname;
  }
  openLink(url:string){
    window.open(url, "_blank");
  }
}
