import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { CartComponent } from './common/cart/cart.component';
import { ConfirmOrderComponent } from './common/confirm-order/confirm-order.component';
import { CustomerSupportComponent } from './common/customer-support/customer-support.component';
import { LoginComponent } from './common/login/login.component';
import { OffersComponent } from './common/offers/offers.component';
import { OrderHistoryComponent } from './common/order-history/order-history.component';
import { OrderPaymentComponent } from './common/order-payment/order-payment.component';
import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { SeparetSectionComponent } from './common/separet-section/separet-section.component';
import { SignupComponent } from './common/signup/signup.component';
import { AddressListComponent } from './common/address-list/address-list.component';
import { AddAddressComponent } from './common/add-address/add-address.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cart', component: CartComponent},
  { path: 'productdetails/:id/:container', component: ProductDetailsComponent},
  { path: 'productsection/:container/:title', component: SeparetSectionComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: LoginComponent},
  { path: 'offers', component: OffersComponent},
  { path: 'order_history', component: OrderHistoryComponent},
  { path: 'order_payment', component: OrderPaymentComponent},
  { path: 'order_confirm', component: ConfirmOrderComponent},
  { path: 'order_payment', component: OrderPaymentComponent},
  { path: 'support', component: CustomerSupportComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'addresses', component: AddressListComponent},
  { path: 'add_address', component: AddAddressComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
