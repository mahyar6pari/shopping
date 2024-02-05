import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProductsService{
    http=inject(HttpClient)
    list:any
    Selected:any[]=[]
products(){
    return this.http.get(`http://localhost:4000/api/products`)
}
}
/*{
    id:"",
    img:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
    Productname:"Product name",
    category:"category",
    price:"$61.99"
},
{
    img:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp",
    Productname:"Product name",
    category:"category",
    price:"$61.99"
},
{
    img:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
    Productname:"Product name",
    category:"category",
    price:"$61.99"
},
{
    img:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
    Productname:"Product name",
    category:"category",
    price:"$61.99"
},
{
    img:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp",
    Productname:"Product name",
    category:"category",
    price:"$61.99"
},*/