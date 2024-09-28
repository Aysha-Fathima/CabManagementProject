import { Routes } from '@angular/router';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'},
];
