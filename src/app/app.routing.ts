import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: "dashboard", component: DashboardComponent },
    { path: "", redirectTo: "dashboard", pathMatch: 'full' }

]

export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true }
);