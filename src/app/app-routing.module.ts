import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
// import { LoginComponent } from './index/login/login.component';


const routes: Routes = [
 { path: '',
 loadChildren: () => import('./index/index.module').then(m => m.IndexModule) }
 ,

{
  path: 'home',
  component: HomeComponent
},
{
  path: 'cars',
  component: CarsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
