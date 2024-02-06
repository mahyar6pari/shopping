import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: "root"
  })
  export class AuthService{
    localstrongfull:boolean=true
    mytoken="token:"
    token:any
    setTokenLocalStorage(token:string){
        localStorage.setItem(this.mytoken,token)
        this.localstrongfull=false
        this.token=token
    }
    getTokenLocalStorage(){
        localStorage.getItem(this.mytoken)
    }
    clearTokenLocalStorage(){
        localStorage.removeItem(this.mytoken)
        this.localstrongfull=true
    }
    }
  