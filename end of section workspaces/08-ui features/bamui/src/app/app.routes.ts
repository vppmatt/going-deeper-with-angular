import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmergencyComponent } from './emergency/emergency.component';

import { UsersMenuComponent } from './side-menu/users-menu/users-menu.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', children: [
        {path: '', component: UserPageComponent},
        {path: '', component: UsersMenuComponent, outlet: "side-menu"},
    ]},
    {path: 'emergency', component: EmergencyComponent}, 
    {path: 'emergency/:building', component: EmergencyComponent}, 
    {path: 'access', component: AccessLogComponent},
    {path: '**', component: NotFoundComponent}
];
