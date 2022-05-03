import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { NextComponent } from './next/next.component';
import { PredictionComponent } from './prediction/prediction.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'next' , component: NextComponent},
  {path:'filter' , component: FiltersComponent},
  {path:'predict' , component: PredictionComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
