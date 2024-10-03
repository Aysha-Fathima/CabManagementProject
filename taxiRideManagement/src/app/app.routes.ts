import { Routes } from '@angular/router';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/contact/contact.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { AdminComponent } from '../components/admin/admin.component';
import { AdminloginComponent } from '../components/adminlogin/adminlogin.component';
import { BookcabComponent } from '../components/bookcab/bookcab.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'admin', component:AdminComponent},
    {path:'adminlogin', component:AdminloginComponent},
    {path:'bookcab', component:BookcabComponent},
    {path:'',redirectTo:'/register',pathMatch:'full'},
];
