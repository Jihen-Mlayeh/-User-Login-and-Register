import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm=this.fb.group({
    fullName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+( ?:[a-zA-Z]+)*$/)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]]
  },{
    validators: passwordMatchValidator
  });
  

  constructor(private fb:FormBuilder, private authService : AuthService, private messageService:MessageService){}
  get email(){
    return this.registerForm.controls['email'];
  }

  get password(){
    return this.registerForm.controls['password'];
  }
  get  fullName(){
    return this.registerForm.controls['fullName'];
  }

  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  registerDetails(){
    const postData={...this.registerForm.value};
    delete postData.confirmPassword;
    this.authService.regsiterUser(postData as User).subscribe;
    (    Response: any) =>this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });;
    (    error: any)=>console.log(error);
  }

}
