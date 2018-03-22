import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MyFavoritesComponent } from './admin/my-favorites/my-favorites.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { MyRecipesComponent } from './admin/my-recipes/my-recipes.component';

const routes: Routes = [
  { path: 'all-recipes', component: AllRecipesComponent },
  { path: 'add-recipe',      component: AddRecipeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'admin',      component: AdminComponent, 
    children: [
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'my-recipes', component:  MyRecipesComponent },
      { path: 'my-favorites', component: MyFavoritesComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
