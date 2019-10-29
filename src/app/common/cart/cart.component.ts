import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  myCart:any[] = [];

  constructor(private storage: Storage) { }

  ngOnInit() {
     this.getCartDetails()
  }

  ionViewWillEnter()
  {
    this.getCartDetails()
  }

  getCartDetails()
  {
      this. storage.get('cart').then((val) => {
        console.log(val);
        this.myCart = JSON.parse(val);
      });
  }

}
