import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateProductService } from './createproduct.service';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.scss'
})
export class CreateproductComponent {
  fb=inject(FormBuilder)
  createProductService=inject(CreateProductService)
  form=this.fb.group({
    imgurl:['',Validators.required],
    name:['',Validators.required],
    category:['',Validators.required],
    price:['',Validators.required],
   })
   onProductRegistration(){
    this.createProductService.createproduct(this.form.value).subscribe((data)=>{
      console.log(data);
      
    })
    
   }
}
