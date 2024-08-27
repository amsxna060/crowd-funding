import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/homepage/container.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SearchbarComponent } from './components/projects/searchbar/searchbar.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectComponent } from './components/projects/project-list/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { DemoChildComponent } from './components/about/demo-child/demo-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ProjectsComponent,
    SearchbarComponent,
    ProjectListComponent,
    ProjectComponent,
    AboutComponent,
    DemoChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
