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
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';
import { AuthGuardService } from './auth-guard.service';
import { AdmitComponent } from './admin/admit/admit.component';



const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'pieces', component: PiecesComponent },
  { path: 'creatives', component: CreativesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'log-in', component: LogInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'admin', canActivate: [AuthGuardService], component: AdminComponent, children: [
    { path: 'my-profile', component: MyProfileComponent},
    { path: 'my-pieces', component: MyPiecesComponent},
    { path: 'admit', component: AdmitComponent},
    { path: 'service-chat', component: ServiceChatComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
