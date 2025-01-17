import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-technical-skill',
  templateUrl: './technical-skill.component.html',
  styleUrls: ['./technical-skill.component.css']
})
export class TechnicalSkillComponent {

   @Input() technical_skills:any=[]
   @Input() skillName:String="";

   getImageurl(skillname:string){
    console.log(skillname);
    return "../../assets/"+skillname;
  }


}
