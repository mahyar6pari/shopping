import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class CreateProductService{
    http=inject(HttpClient)
    createproduct(data:any){
        return this.http.post(`http://localhost:4000/api/insertproduct`,data)
    }
}