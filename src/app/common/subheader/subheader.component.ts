import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {

  myCart:any[] = [];

  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.getCartDetails()
  }

  getCartDetails()
  {
      this. storage.get('cart').then((val) => {
        this.myCart = JSON.parse(val);
      });
  }


  RedirectToCart()
  {
      this.router.navigate(['cart']);
  }

}
