import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationService=inject(RegistrationService)
 fb=inject(FormBuilder)
 router=inject(Router)
 form=this.fb.group({
  name:['',Validators.required],
  tel:['',Validators.required],
  password:['',Validators.required],
 })
 onsubmit(){
  console.log(this.form.value);
  this.registrationService.registration(this.form.value).subscribe((data)=>{
    console.log(data);
    this.router.navigateByUrl('login')
  })

  
 }
}
