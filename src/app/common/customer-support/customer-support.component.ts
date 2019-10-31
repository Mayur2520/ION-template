import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportComponent implements OnInit {


  FAQs:any[] = [
    {
      que:'HOW CAN I CHANGE MY SHIPPING ADDRESS?',
      ans:'By default, the last used shipping address will be saved into to your Sample Store account. When you are checking out your order, the default shipping address will be displayed and you have the option to amend it if you need to.',
    },
    {
      que:'HOW DO I ACTIVATE MY ACCOUNT?',
      ans:'The instructions to activate your account will be sent to your email once you have submitted the registration form. If you did not receive this email, your email service provider’s mailing software may be blocking it. You can try checking your junk / spam folder or contact us at help@samplestore.com'
    },
    {
      que:'WHAT DO YOU MEAN BY POINTS? HOW DO I EARN IT?',
      ans:'Because you are important to us, we want to know what you think about the products. As an added value, every time you rate the products you earn points which go straight to your account. 1 point are added to your account for every review that you give. You will need those points in order to redeem the sample products. So keep rating the products to keep earning points!'
    },
    {
      que:'WHY IS THERE A CHECKOUT LIMIT? / WHAT ARE ALL THE CHECKOUT LIMITS?',
      ans:'Sample Store is a popular spot and gets lots of shoppers at a time. These limits are in place to make sure everyone has a good time trying and purchasing their products. So...- Each member is entitled to only one (1) sample order every day.- Each member is entitled to one (1) bundle of sample for each product.- Your account must have sufficient points before you can checkout the sample products.- Kindly clear all pending payments before another checkout.'
    },
    {
      que:'HOW CAN I TRACK MY ORDERS & PAYMENT?',
      ans:'After logging into your account, the status of your checkout history can be found under Order History. For orders via registered postage, a tracking number (article tracking number) will be given to you after the receipt given from Singapore Post Limited (SingPost).'
    },
    {
      que:'HOW DO I CANCEL MY ORDERS BEFORE I MAKE A PAYMENT?',
      ans:'After logging into your account, go to your Shopping Cart. Here, you will be able to make payment or cancel your order. Note: We cannot give refunds once payment is verified.'
    },
    {
      que:'HOW LONG WILL IT TAKE FOR MY ORDER TO ARRIVE AFTER I MAKE PAYMENT?',
      ans:'Members who ship their orders within Singapore should expect to receive their orders within five (5) to ten (10) working days upon payment verification depending on the volume of orders received. If you experience delays in receiving your order, contact us immediately and we will help to confirm the status of your order.'
    },
    {
      que:'HOW DO YOU SHIP MY ORDERS?',
      ans:'All your orders are sent via Singapore Post Limited (SingPost).'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
