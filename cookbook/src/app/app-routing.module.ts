import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'add-recipe',      component: AddRecipeComponent },
  { path: 'login',      component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
