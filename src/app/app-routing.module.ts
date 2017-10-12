import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './sessions/login-form/login-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketNewComponent } from './tickets/ticket-new/ticket-new.component';
import { TicketEditComponent } from './tickets/ticket-edit/ticket-edit.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';




const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
 { path: 'login', component: LoginFormComponent },
 { path: 'users', component: UserListComponent, canActivate: [AdminGuard] },
 { path: 'users/new', component: UserNewComponent, canActivate: [AdminGuard] },
 { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AdminGuard] },
 { path: 'tickets', component: TicketListComponent, canActivate: [AuthGuard] },
 { path: 'tickets/new', component: TicketNewComponent, canActivate: [AuthGuard] },
 { path: 'tickets/edit/:id', component: TicketEditComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}