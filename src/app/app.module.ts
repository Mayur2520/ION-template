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

import { NavigationComponent } from './common/navigation/navigation.component';
import { CartComponent } from './common/cart/cart.component';
import { ProductDetailsComponent } from './common/product-details/product-details.component';
import { SubheaderComponent } from './common/subheader/subheader.component';
import { ProductsService } from './services/products.service';
import { MaterialModules } from './modules/material-module';
import {PinchZoomModule} from 'ngx-pinch-zoom';
@NgModule({
  declarations: [AppComponent, NavigationComponent, CartComponent, ProductDetailsComponent, SubheaderComponent],
  entryComponents: [NavigationComponent],
  imports: [BrowserModule, IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, MaterialModules, PinchZoomModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
