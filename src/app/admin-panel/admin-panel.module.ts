import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { StudentsComponent } from './admin-panel/students/students.component';
import { TeachersComponent } from './admin-panel/teachers/teachers.component';
import { GroupsComponent } from './admin-panel/groups/groups.component';
import { SubjectsComponent } from './admin-panel/subjects/subjects.component';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MenuModule
  ],
  declarations: [AdminPanelComponent, StudentsComponent, TeachersComponent, GroupsComponent, SubjectsComponent]
})
export class AdminPanelModule { }
