import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {MainPageComponent} from './components/main-page/main-page.component'
import {HomeComponent} from './components/home/home.component'

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home/:name', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
