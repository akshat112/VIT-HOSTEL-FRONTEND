import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MakeRequestComponent } from './make-request/make-request.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './services/login.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CleanRequestService } from './services/clean-request.service';
import { CompleteCleanRequestService } from './services/complete-clean-request.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SupervisorLoginComponent } from './supervisor-login/supervisor-login.component';
import { PendingCleaningRequestsComponent } from './pending-cleaning-requests/pending-cleaning-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MakeRequestComponent,
    FeedbackComponent,
    ComplaintsComponent,
    SupervisorLoginComponent,
    PendingCleaningRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, AuthGuard, CleanRequestService, CompleteCleanRequestService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
