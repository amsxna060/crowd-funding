import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContainerComponent } from './components/homepage/container.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SigninComponent },
  { path: 'campaign', component: CreateCampaignComponent },
  { path: 'howitworks', component: HowItWorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
