import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { WhoIsInTheBuildingComponent } from './who-is-in-the-building/who-is-in-the-building.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UserPageComponent},
    {path: 'emergency', component: WhoIsInTheBuildingComponent}, 
    {path: 'emergency/:building', component: WhoIsInTheBuildingComponent}, 
    {path: 'access', component: AccessLogComponent},
    {path: '**', component: NotFoundComponent}
];
