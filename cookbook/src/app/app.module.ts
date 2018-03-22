import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//INPUT FORM
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AdminComponent } from './admin/admin.component';
import { MyRecipesComponent } from './admin/my-recipes/my-recipes.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyFavoritesComponent } from './admin/my-favorites/my-favorites.component';

//Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule, MatTextareaAutosize} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllRecipesComponent,
    AddRecipeComponent,
    AdminComponent,
    MyRecipesComponent,
    MyProfileComponent,
    MyFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
