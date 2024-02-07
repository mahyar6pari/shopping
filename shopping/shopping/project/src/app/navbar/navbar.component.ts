import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { AuthService } from '../auth.service';
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
public  productssservice=inject(ProductsService)
public  loginservice=inject(loginService)  
router=inject(Router)
  authService=inject(AuthService)
  serch:string=''
  searchList:any[]=[]
  
  onsearch(event:any){
    this.serch=event.target.value
    this.searchList.push(this.productssservice.list)
    console.log(this.searchList);
    

  }


onlogout(){
  this.authService.clearTokenLocalStorage()
}
onlogoutadmin(){
this.loginservice.Usertype=false
}
oncart(){
if (!this.authService.localstrongfull) {
  this.router.navigateByUrl('cart')
}  
else{
  window.alert("First, log in to your account")
}
}
}