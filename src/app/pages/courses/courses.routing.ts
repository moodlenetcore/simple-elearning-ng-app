import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  }
];

export const routing = RouterModule.forChild(routes);