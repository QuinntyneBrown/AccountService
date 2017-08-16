﻿import { Routes, RouterModule } from '@angular/router';
import { TenantGuardService } from "./shared/guards/tenant-guard.service";
import { EventHubConnectionGuardService } from "./shared/guards/event-hub-connection-guard.service";
import { AuthGuardService } from "./shared/guards/auth-guard.service";
import { LoginPageComponent } from "./users/login-page.component";

import { TenantPaginatedListPageComponent } from "./tenants/tenant-paginated-list-page.component";
import { TenantEditPageComponent } from "./tenants/tenant-edit-page.component";
import { SetTenantPageComponent } from "./tenants/set-tenant-page.component";

import { UserPaginatedListPageComponent } from "./users/user-paginated-list-page.component";
import { UserEditPageComponent } from "./users/user-edit-page.component";

export const routes: Routes = [
    {
        path: '',
        component: TenantPaginatedListPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'tenants',
        component: TenantPaginatedListPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'tenants/create',
        component: TenantEditPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'tenants/:id',
        component: TenantEditPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [
            TenantGuardService
        ]
    },
    {
        path: 'tenants/set',
        component: SetTenantPageComponent
    },
    {
        path: 'users',
        component: UserPaginatedListPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'users/create',
        component: UserEditPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
    {
        path: 'users/:id',
        component: UserEditPageComponent,
        canActivate: [
            TenantGuardService,
            AuthGuardService,
            EventHubConnectionGuardService
        ]
    },
];

export const RoutingModule = RouterModule.forRoot([
    ...routes
]);

export const routedComponents = [
    LoginPageComponent,
    SetTenantPageComponent,
    TenantEditPageComponent,
    TenantPaginatedListPageComponent,
    UserEditPageComponent,
    UserPaginatedListPageComponent
];