import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MakeRequestComponent } from './make-request/make-request.component';
import { AuthGuard } from './auth.guard';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SupervisorLoginComponent } from './supervisor-login/supervisor-login.component';
import { PendingCleaningRequestsComponent } from './pending-cleaning-requests/pending-cleaning-requests.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cleanRequest', component: MakeRequestComponent, canActivate: [AuthGuard]},
  {path: 'student/feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  {path: 'student/complaint', component: ComplaintsComponent, canActivate: [AuthGuard]},
  {path: 'supervisor/login', component: SupervisorLoginComponent},
  {path: 'supervisor/clean/pending', component: PendingCleaningRequestsComponent, canActivate: [AuthGuard]},
  {path: 'supervisor/complaints/all', component: AllComplaintsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
