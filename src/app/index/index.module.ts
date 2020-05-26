import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const cr: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, MaterialModule, HttpClientModule, ReactiveFormsModule, RouterModule.forChild(cr)
  ],
  exports: [ LoginComponent]})
export class IndexModule {
  constructor()
  {
    console.log('Index module gets loaded');
  }
}
