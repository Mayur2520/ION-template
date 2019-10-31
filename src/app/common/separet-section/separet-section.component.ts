import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute  } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-separet-section',
  templateUrl: './separet-section.component.html',
  styleUrls: ['./separet-section.component.scss'],
})
export class SeparetSectionComponent implements OnInit {
  myCart:any[] = [];
  Productslist:any[] = [];
  containername:string;
  title:string;
  constructor(private storage: Storage, private router: Router, private route: ActivatedRoute, private _ProductsService: ProductsService) { }

  ngOnInit() {
    this.getCartDetails()
    this.getContainerData()
  }


  getContainerData()
  {
    this.containername = this.route.snapshot.paramMap.get("container");
    this.title = this.route.snapshot.paramMap.get("title");
    this.Productslist = this._ProductsService.getProductsList(this.containername);
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

  RedirectToCart()
  {
      this.redirectionToUrl(['/cart']);
  }

  ProductDetails(id,container)
  {
    id = parseInt(id)+1;
    this.redirectionToUrl(['/productdetails',id,container])
  }
}
