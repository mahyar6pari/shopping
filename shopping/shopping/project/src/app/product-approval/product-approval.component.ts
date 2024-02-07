import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product_approvalService } from './product-approval.service';

@Component({
  selector: 'app-product-approval',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product-approval.component.html',
  styleUrl: './product-approval.component.scss'
})
export class ProductApprovalComponent {
  fb=inject(FormBuilder)
   
  public product_approvalService=inject(Product_approvalService)
   ngOnInit(): void {
this.product_approvalService.theProductWaSordered().subscribe((data)=>{
  this.product_approvalService.Products=data
  console.log(this.product_approvalService.Products);
  
})
   }
  onApproval(){
    this.product_approvalService.update(this.product_approvalService.Products).subscribe((data)=>{
      console.log(data);
      
    })
  }
}
