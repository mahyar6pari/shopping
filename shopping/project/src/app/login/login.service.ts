import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class loginService{
    http=inject(HttpClient)
    login(data:any) {
        return this.http.post(`http://localhost:4000/api/checkdata`,data)
    }
}