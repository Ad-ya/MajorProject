import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitlesComponent } from './dashboard/titles/titles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { NextComponent } from './next/next.component';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TitlesComponent,
    NavbarComponent,
    HistoryComponent,
    NextComponent,
    FiltersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
