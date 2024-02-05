import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { loginService } from './login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb=inject(FormBuilder)
  router=inject(Router)
  loginservice=inject(loginService)
  Authservice=inject(AuthService)
 form=this.fb.group({
  tel:['',Validators.required],
  password:['',Validators.required],
 })

 onsubmit(){
  console.log(this.form.value);
  this.router.navigateByUrl('Products')
  this.loginservice.login(this.form.value).subscribe((data)=>{
    if (data=="NotAccount") {
       window.alert(data)
    }
    else{
      this.Authservice.setTokenLocalStorage(data as string)
      this.router.navigateByUrl('')
    }
      
    
    console.log(data);
    
  })
 }
}
