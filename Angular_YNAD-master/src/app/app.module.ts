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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


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
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ChatService } from './chat.service';
import { HttpModule } from '@angular/http';


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
    AdmitComponent,
    HomeComponent,
    FooterComponent
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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    MatCardModule
  ],
  providers: [AuthGuardService, AuthService, UserServiceService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }



