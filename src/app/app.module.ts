import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { NavigationComponent } from './common/navigation/navigation.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { AddressListComponent } from './common/address-list/address-list.component';
import { AddAddressComponent } from './common/add-address/add-address.component';
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

import { ProductsService } from './services/products.service';
import { MaterialModules } from './modules/material-module';
import {PinchZoomModule} from 'ngx-pinch-zoom';
@NgModule({
  declarations: [AppComponent, NavigationComponent, CartComponent, ProductDetailsComponent, SeparetSectionComponent,AboutusComponent,
    ConfirmOrderComponent,
    CustomerSupportComponent,
    LoginComponent,
    OffersComponent,
    OrderHistoryComponent,
    OrderPaymentComponent,
    SignupComponent,AddressListComponent,
    AddAddressComponent],
  entryComponents: [NavigationComponent],
  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MaterialModules, PinchZoomModule, FormsModule, ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductsService,
    NativeGeocoder, Geolocation,AndroidPermissions,
    LocationAccuracy
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
