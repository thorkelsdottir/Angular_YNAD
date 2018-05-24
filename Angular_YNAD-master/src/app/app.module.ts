import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//INPUT FORM
import {MatInputModule} from '@angular/material/input';

//Material
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatDialog, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material';
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
import { AdmitComponent } from './admin/admit/admit.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { UserServiceService } from './user-service.service';
import { PiecesServiceService } from './pieces-service.service';
import { CrudService } from './crud.service';
import { EditUserComponent } from './admin/my-profile/edit-user/edit-user.component';
import { SearchService } from './search.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DeletePieceModalComponent, ModalOverlay } from './admin/my-pieces/delete-piece-modal/delete-piece-modal.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer } from './store/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { UsersActions } from './users.actions';
import { RouterModule } from '@angular/router';
import { UsersEpic } from './users.epic';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { FilterArrayPipe } from './admin/all-users/filter.pipe';


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
    AdmitComponent,
    HomeComponent,
    FooterComponent,
    EditUserComponent,
    DeletePieceModalComponent,
    ModalOverlay,
    AllUsersComponent,
    FilterArrayPipe
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
    MatCardModule,
    NgbModule.forRoot(), 
    MatDialogModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot()
        ],
  entryComponents: [ModalOverlay],
  providers: [
    AuthGuardService, 
    AuthService, 
    UserServiceService, 
    PiecesServiceService, 
    CrudService, 
    SearchService,
    UsersActions,
    UsersEpic,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MAT_DIALOG_DATA, useValue: {}}, 
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,
    private usersEpic: UsersEpic
  ) {
    const rootEpic = combineEpics( 
      this.usersEpic.getAllPieces,
      this.usersEpic.deleteFromPieces
    );
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];
    this.ngRedux.configureStore(rootReducer,
      {}, middleware, [devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }

}

