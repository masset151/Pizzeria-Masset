import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDividerModule} from '@angular/material/divider';

import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
    
  ]
})
export class MaterialModule { }
