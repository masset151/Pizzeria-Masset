import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MenubarModule} from 'primeng/menubar';






@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
  ],exports:[MenuComponent]
})
export class MenuModule { }
