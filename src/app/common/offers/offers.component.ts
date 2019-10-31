import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {

  offersList: any[] = [
    {
      name:"Summer Big Sale 50% Off",
      size:6,
      image:'../../../assets/images/offers/1.jpg'
    },
    {
      name:"Summer Sale 50% Off",
      size:6,
      image:'../../../assets/images/offers/2.jpg'
    },
    {
      name:"Diwali Sale 10% Off",
      size:12,
      image:'../../../assets/images/offers/3.jpg'
    },
    {
      name:"Diwali Dhamaka 56% Off",
      size:12,
      image:'../../../assets/images/offers/4.jpg'
    },
    {
      name:"10% Cashback on every order",
      size:12,
      image:'../../../assets/images/offers/5.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {}

}
