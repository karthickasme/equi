import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { NgModule } from '@angular/core';


@NgModule({
  imports: [   MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule
  ],
  exports: [   MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule
  ]
})
export class MaterialModule { }
