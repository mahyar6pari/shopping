import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationService{
    http=inject(HttpClient)
    registration(data:any) {
        return this.http.post(`http://localhost:4000/api/insert`,data)
    }

}