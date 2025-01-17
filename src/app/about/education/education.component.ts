import { Component } from '@angular/core';
import { Education } from 'src/app/model/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  
  educationList: Education[] = [
   
    {
      institute: 'Dalhousie University',
      degree: 'Masters of Applied Computer Science',
      duration: 'May 2022 - Aug 2023',
      courses:'Serverless Computing, Advanced Software Development, Data Management,Cloud Computing, Web Development'
    },
    {
      institute: 'University Institute of Engineering & Technology',
      degree: 'Bachelor of Technology in Computer Science',
      duration: 'July 2014 - July 2018',
      courses:'Object Oriented Programming, Data Structures and Algorithms, Advanced Java, Software Engineering and Testing'
    }
    
  ];

}
