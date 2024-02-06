import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class loginService{
    http=inject(HttpClient)
    //admin or user
    Usertype=false
    login(data:any) {
        return this.http.post(`http://localhost:4000/api/checkdata`,data)
    }
    adminlogin(data:any){
      return this.http.post(`http://localhost:4000/api/admin`,data)
    }
}