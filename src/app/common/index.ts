import {NgModule} from '@angular/core';

import { AboutusComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OffersComponent } from './offers/offers.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderPaymentComponent } from './order-payment/order-payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SeparetSectionComponent } from './separet-section/separet-section.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    exports:[
        AboutusComponent,
        CartComponent,
        ConfirmOrderComponent,
        CustomerSupportComponent,
        LoginComponent,
        NavigationComponent,
        OffersComponent,
        OrderHistoryComponent,
        OrderPaymentComponent,
        ProductDetailsComponent,
        SeparetSectionComponent,
        SignupComponent
    ]
})

export class componentsIndex {}