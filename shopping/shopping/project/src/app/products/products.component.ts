import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
public  productsservice=inject(ProductsService)
public  loginservice=inject(loginService)
fb=inject(FormBuilder)
form=this.fb.group({
  id:['',Validators.required],
  imgurl:['',Validators.required],
  name:['',Validators.required],
  category:['',Validators.required],
  price:['',Validators.required],
 })
stateofeternity=false
ngOnInit() {
  this.productsservice.products().subscribe((data)=>{
    this.productsservice.list=data
    console.log(data);
    
  })
} 
  Productselection(even:any){
    this.productsservice.Selected.push(even)

    
  }
  update(even:any){
    this.stateofeternity=true
    for (let i = 0; i < this.productsservice.list.length; i++) {
      if (this.productsservice.list[i].id==even) {
        this.form.get('id')?.setValue(this.productsservice.list[i].id)
        this.form.get('imgurl')?.setValue(this.productsservice.list[i].img)
        this.form.get('name')?.setValue(this.productsservice.list[i].name)
        this.form.get('category')?.setValue(this.productsservice.list[i].category)
        this.form.get('price')?.setValue(this.productsservice.list[i].price)
        console.log(this.form.value);
        
      }
    }
  }
  onUpdateProduct(){
    this.productsservice.updateProduct(this.form.value).subscribe((data)=>{
      this.stateofeternity=false
    })
    console.log(this.form.value);
  }
}
