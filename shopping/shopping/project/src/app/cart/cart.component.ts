import { Component, inject } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { CommonModule } from '@angular/common';
import { jwtDecode } from "jwt-decode";
import { AuthService } from '../auth.service';
import { Cart } from './cart.service';
import { window } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  authService=inject(AuthService)
  router=inject(Router)
  cart=inject(Cart)
  Productsservice=inject(ProductsService)
  token:any=''
  decoded:any=''
public  products:any[]=[]
ngOnInit(): void {
  for (let i = 0; i < this.Productsservice.Selected.length; i++) {
    for (let j = 0; j < this.Productsservice.list.length; j++) {
      if (this.Productsservice.Selected[i]==this.Productsservice.list[j].id) {
        this.products.push(this.Productsservice.list[j])
     }
    }
  } 

  
}

onApply(){
  console.log(this.products);
   this.token = this.authService.token;
   this.decoded = jwtDecode(this.token);
   console.log(this.decoded);
   this.cart.cart(this.products,this.decoded).subscribe((data)=>{ 
    this.router.navigateByUrl("")
  })

 }
}