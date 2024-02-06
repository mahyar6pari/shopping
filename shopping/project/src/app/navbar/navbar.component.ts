import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  authService=inject(AuthService)
  serch:string=''
  searchList:any[]=[]
  onsearch(event:any){
    this.serch=event.target.value
  }
  onclicksearch(){

}
onlogout(){
  this.authService.clearTokenLocalStorage()
}
onlogoutadmin(){
this.loginservice.Usertype=false

}
}


 /*   for (let i = 0; i <= this.productssservice.searchList.length; i++) {
      this.productssservice.list.splice(0,1)
      console.log("1",this.productssservice.searchList.length);
      
    }*/
 //   for (let i = 0; i <= this.productssservice.searchList.length; i++) {
     // if (this.serch=='') {
   //     this.productssservice.list.push( this.productssservice.searchList[i])
   //     console.log("2",this.productssservice.list);
   //   }
     /* else if (!this.productssservice.searchList.search(this.serch)) {
        this.productssservice.list.push(this.productssservice.searchList[i])
        console.log("3",this.productssservice.list);
      }*/
  
//    }