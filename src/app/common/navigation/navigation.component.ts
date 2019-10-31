import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';
export interface MenuItems {
  name: string;
  icon: string;
  url:string;
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  MenuItems: MenuItems[] = [
    {name:"Login",icon:"person",url:'/signin'},
    {name:"Home",icon:"home",url:'/home'},
    {name:"Offers",icon:"local_offer",url:'/offers'},
    {name:"My Orders",icon:"history",url:'/order_history'},
    {name:"My Cart",icon:"shopping_cart",url:'/cart'},
  ];

  OtherMenuItems: MenuItems[] = [
    {name:"Customer Support",icon:"call",url:'/support'},
    {name:"Rate Us",icon:"stars",url:''},
    {name:"Share",icon:"share",url:''},
    {name:"About Us",icon:"info",url:'/aboutus'},
    {name:"Logout",icon:"exit_to_app",url:''},
  ];
  constructor(private router: Router, private menuCtrl: MenuController) { }

  selectedTheme: String;
  ngOnInit() {

  }


  redirectionToUrl(urlparams)
  {
    this.router.navigate([urlparams]);
    this.menuCtrl.toggle();
  }

}
