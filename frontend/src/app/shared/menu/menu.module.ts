import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MenubarModule} from 'primeng/menubar';
import { PrimengModule } from 'src/app/primeng/primeng.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    PrimengModule,
  ],exports:[MenuComponent]
})
export class MenuModule { }
