import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './shared/menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PizzasModule } from './pizzas/pizzas.module';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PizzasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
