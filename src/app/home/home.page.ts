import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
export interface FruitsList{
  name:string;
  image:string;
  price:number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myCart = [];
  FruitsList:FruitsList[] = [];
  vegitablesList:FruitsList[] = [];

  slideOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 400
  };

  slideOptGrossary = {
    slidesPerView: 1.75,
    spaceBetween: 1,
    centeredSlides: false
  };

  constructor(private menu: MenuController, private storage: Storage, private router: Router,private _ProductsService: ProductsService) {}


  ngOnInit() {
    this.getProducts();
    this.getCartDetails();
 }

 ionViewWillEnter()
 {
  this.getProducts();
   this.getCartDetails()
 }

 getFruits()
 {
  this.FruitsList = this._ProductsService.getFruitsList();
 }

 getVegitables()
 {
  this.vegitablesList = this._ProductsService.getVegitablesList();
 }

 getProducts()
 {
    this.getFruits();
    this.getVegitables();
 }

 getCartDetails()
 {
     this. storage.get('cart').then((val) => {
       if(val != null)
        this.myCart = JSON.parse(val);
     });
 }

 ExitInCart(item)
 {
   if(this.myCart.length > 0)
   {
    this.myCart.map((value)=>{
        if(value.name == item.name)
          {
            item.qty = value.qty;
            return true
          }
          else{
            return false;
          }
    });
   }
 }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  addToCart(item)
  {
    item.qty = 1;
    this.myCart.push(item);
    this.storage.set('cart', JSON.stringify(this.myCart));
  }
  
  updateitemQty(item,type)
  {
    if(type == 'inc')
    {
      item.qty += 1
    }
    else
    {
      item.qty -= 1
    }

    this.myCart.map((value,index)=>{
      if(value.name == item.name)
      { 
        if(item.qty == 0)
        {
          this.myCart.splice(index,1);
        }
        else
        {
          value.qty = item.qty
        }
      }
    })
  }


  redirectionToUrl(urlparams)
  {
    this.router.navigate(urlparams);
  }

  UpdateCart()
  {
      this.storage.set('cart', JSON.stringify(this.myCart));
      this.redirectionToUrl(['/cart']);
  }

  ProductDetails(id,container)
  {
    id = parseInt(id)+1;
    this.redirectionToUrl(['/productdetails',id,container])
  }

  OpenOnSeparateSection(container,title)
  {
    this.redirectionToUrl(['/productsection',container,title])
  }


}
