import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  exports: [
    CardModule,
    MenuModule,
  ]
})
export class PrimengModule { }
