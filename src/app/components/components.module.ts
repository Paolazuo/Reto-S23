import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';

// Angular Model
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ButtonComponent } from './button/button.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FormInpComponent } from './form-inp/form-inp.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    MenuComponent,
    HomePageComponent,
    CheckBoxComponent,
    ButtonComponent,
    FormInpComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    MenuComponent,
    HomePageComponent
  ]
})
export class ComponentsModule { }
