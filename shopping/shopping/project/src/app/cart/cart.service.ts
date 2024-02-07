import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class Cart{
    http=inject(HttpClient)
    cart(data:any,id:any): Observable<any> {
        return this.http.post(`http://localhost:4000/api/cart/${id}`,data)
    }
}