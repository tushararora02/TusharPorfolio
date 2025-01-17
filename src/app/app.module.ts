import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { MyheaderComponent } from './home/myheader/myheader.component';
import { MyfooterComponent } from './home/myfooter/myfooter.component';
import { MymenuComponent } from './home/myheader/mymenu/mymenu.component';
import { IntroPageComponent } from './home/intro-page/intro-page.component';
import { TechnicalSkillComponent } from './about/technical-skill/technical-skill.component';
import { EducationComponent } from './about/education/education.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ProjectDemoComponent } from './project/project-demo/project-demo.component';
import { ContactMeComponent } from './home/myheader/contact-me/contact-me.component';
import { ContactFormComponent } from './home/myheader/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
        WorkComponent,
        AboutComponent,
        ProjectComponent,
        MyheaderComponent,
        MyfooterComponent,
        ContactMeComponent,
        MymenuComponent,
        IntroPageComponent,
        TechnicalSkillComponent,
        EducationComponent,
        CertificateComponent,
        ProjectDemoComponent,
        ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
