import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './about/about.component';
import { PiecesComponent } from './pieces/pieces.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreativesComponent } from './creatives/creatives.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { AuthGuardService } from './auth-guard.service';
import { AdmitComponent } from './admin/admit/admit.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './admin/my-profile/edit-user/edit-user.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pieces', component: PiecesComponent },
  { path: 'creatives', component: CreativesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'log-in', component: LogInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'admin', canActivate: [AuthGuardService], component: AdminComponent, children: [
    { path: '', redirectTo: 'my-profile',  pathMatch: 'full' },
    { path: 'my-profile', component: MyProfileComponent, children: [
      { path: 'edit-user', component: EditUserComponent}
    ] },
    { path: 'my-pieces', component: MyPiecesComponent},
    { path: 'admit', component: AdmitComponent},
    { path: 'all-users', component: AllUsersComponent},
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

