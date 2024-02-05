import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from './products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
public  productssservice=inject(ProductsService)

  ngOnInit() {
    this.productssservice.products().subscribe((data)=>{
      this.productssservice.list=data
      console.log(data);
      
    })
  }
  Productselection(even:any){
    this.productssservice.Selected.push(even)

    
  }
}
