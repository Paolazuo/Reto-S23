import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ButtonComponent } from './components/button/button.component';
import { FormInpComponent } from './components/form-inp/form-inp.component';

const routes: Routes = [{
  path: 'home',
  component: HomePageComponent
},
{path:'check',
component: CheckBoxComponent},
{path:'button',
component: ButtonComponent},
{path:'form',
component: FormInpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
