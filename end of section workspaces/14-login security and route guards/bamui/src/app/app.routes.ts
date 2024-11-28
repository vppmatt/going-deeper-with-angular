import { Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { AccessLogComponent } from './access-log/access-log.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmergencyComponent } from './emergency/emergency.component';

import { UsersMenuComponent } from './side-menu/users-menu/users-menu.component';
import { UserPrefetchService } from './user-prefetch.service';
import { LoadErrorComponent } from './load-error/load-error.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserBulkEditComponent } from './user-bulk-edit/user-bulk-edit.component';
import { LoginRouteGuardService } from './login-route-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminRouteGuardService } from './admin-route-guard.service';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', resolve: {users: UserPrefetchService},
        children: [
        {path: '', component: UserPageComponent},
        {path: '', component: UsersMenuComponent, outlet: "side-menu"},
    ]},
    {path: 'user-add', component: UserEditComponent, canActivate: [AdminRouteGuardService]}, 
    {path: 'user/:id', component: UserEditComponent, canActivate: [AdminRouteGuardService]}, 
    {path: 'user-bulk-edit', component: UserBulkEditComponent, canActivate: [AdminRouteGuardService]}, 
    {path: 'emergency', component: EmergencyComponent}, 
    {path: 'emergency/:building', component: EmergencyComponent}, 
    {path: 'access', component: AccessLogComponent,  canActivate: [LoginRouteGuardService]},
    {path: 'loaderror', component: LoadErrorComponent},
    {path: 'login', component: LoginComponent},
    {path: 'noaccess', component: NoAccessComponent},   
    {path: '**', component: NotFoundComponent}
];
