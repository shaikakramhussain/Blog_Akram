import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
   {path: '',          component: HomeComponent},
   {path: 'home',      component: HomeComponent},
   {path: 'account',   component : AccountComponent},
   {path: 'cart',      component: CartComponent},
   {path: 'login',     component: LoginComponent},
   {path: 'logout',    component: LogoutComponent},
   {path: 'signup',    component: SignUpComponent},
   {path: 'products',  component: ProductsComponent},
   {path: 'orders',    component: OrdersComponent},
   {path: '**',        component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
