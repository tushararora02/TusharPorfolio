import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactMeComponent } from './home/myheader/contact-me/contact-me.component';
import { ContactFormComponent } from './home/myheader/contact-form/contact-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }, 
  { path: 'work', component: WorkComponent }, 
  { path: 'project', component: ProjectComponent }, 
  { path: 'certificate', component: CertificateComponent }, 
  {path:'contact', component:ContactFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
