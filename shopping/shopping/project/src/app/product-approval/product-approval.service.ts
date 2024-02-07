import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class Product_approvalService{
    http=inject(HttpClient)
    Products:any
    theProductWaSordered(){
        return this.http.get(`http://localhost:4000/api/getcartnotconfirmed`)
    }
    update(data:any){
        return this.http.post(`http://localhost:4000/api/update`,data)
    }
}
