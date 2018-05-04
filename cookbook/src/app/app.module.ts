import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//INPUT FORM
import {MatInputModule} from '@angular/material/input';
//Material
import {MatButtonModule, MatCheckboxModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

//AuthService
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreativesComponent } from './creatives/creatives.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyPiecesComponent } from './admin/my-pieces/my-pieces.component';
import { ServiceChatComponent } from './admin/service-chat/service-chat.component';
import { AdmitComponent } from './admin/admit/admit.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    CreativesComponent,
    AboutComponent,
    LogInComponent,
    SignUpComponent,
    AdminComponent,
    MyProfileComponent,
    MyPiecesComponent,
    ServiceChatComponent,
    AdmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



