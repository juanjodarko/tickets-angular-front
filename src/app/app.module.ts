import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginFormComponent } from './sessions/login-form/login-form.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketNewComponent } from './tickets/ticket-new/ticket-new.component';
import { TicketEditComponent } from './tickets/ticket-edit/ticket-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginFormComponent,
    HomeComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    TicketListComponent,
    TicketNewComponent,
    TicketEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [Angular2TokenService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
