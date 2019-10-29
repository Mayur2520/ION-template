import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';

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


  FruitsList:FruitsList[] = [
    {name:"Apple",image:"../assets/images/fruits/apple.png",price:50},
    {name:"Avocado",image:"../assets/images/fruits/avocado.png",price:120},
    {name:"Berry",image:"../assets/images/fruits/berry.png",price:80},
    {name:"Coconut",image:"../assets/images/fruits/coconut.png",price:30},
    {name:"Kiwi",image:"../assets/images/fruits/kiwi.png",price:45},
    {name:"Orange",image:"../assets/images/fruits/orange.png",price:20},
    {name:"Pear",image:"../assets/images/fruits/pear.png",price:60},
    {name:"Pineapple",image:"../assets/images/fruits/pineapple.png",price:35},
    {name:"Raspberry",image:"../assets/images/fruits/raspberry.png",price:110},
  ];

  vegitablesList:FruitsList[] = [
    {name:"Aubergine",image:"../assets/images/vegitables/aubergine.png",price:30},
    {name:"Broccoli",image:"../assets/images/vegitables/broccoli.png",price:40},
    {name:"Carrot",image:"../assets/images/vegitables/carrot.png",price:25},
    {name:"Cucumber",image:"../assets/images/vegitables/cucumber.png",price:15},
    {name:"Garlic",image:"../assets/images/vegitables/garlic.png",price:60},
    {name:"Lemon",image:"../assets/images/vegitables/lemon.png",price:5},
    {name:"Onion",image:"../assets/images/vegitables/onion.png",price:50},
    {name:"Pepper",image:"../assets/images/vegitables/pepper.png",price:45},
    {name:"Salad",image:"../assets/images/vegitables/salad.png",price:30},
    {name:"Tomato",image:"../assets/images/vegitables/tomato.png",price:35},
  ];

  constructor(private menu: MenuController, private storage: Storage, private router: Router,) {}

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


  redirectionToUrl(path, fieldid)
  {
    if(fieldid)
    this.router.navigate([path,fieldid]);
    else
    this.router.navigate([path]);
  }

  UpdateCart()
  {
      this.storage.set('cart', JSON.stringify(this.myCart));
      this.router.navigate(['cart']);
  }


}
