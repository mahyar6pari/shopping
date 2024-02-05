import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:"navbar",
        component:NavbarComponent
    },
    {
        path:"registration",
        component:RegistrationComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:ProductsComponent
    },
    {
        path:"cart",
        component:CartComponent
    }
];
