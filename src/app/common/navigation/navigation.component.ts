import { Component, OnInit } from '@angular/core';
export interface MenuItems {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  MenuItems: MenuItems[] = [
    {name:"Login",icon:"person"},
    {name:"Home",icon:"home"},
    {name:"Offers",icon:"local_offer"},
    {name:"My Orders",icon:"history"},
    {name:"My Cart",icon:"shopping_cart"},
  ];

  OtherMenuItems: MenuItems[] = [
    {name:"Customer Support",icon:"call"},
    {name:"Rate Us",icon:"stars"},
    {name:"Share",icon:"share"},
    {name:"About Us",icon:"info"},
    {name:"Logout",icon:"exit_to_app"},
  ];
  constructor() { }

  ngOnInit() {}

  

}
