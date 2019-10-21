import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MakeRequestComponent } from './make-request/make-request.component';
import { AuthGuard } from './auth.guard';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintsComponent } from './complaints/complaints.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cleanRequest', component: MakeRequestComponent, canActivate: [AuthGuard]},
  {path: 'student/feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
  {path: 'student/complaint', component: ComplaintsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
