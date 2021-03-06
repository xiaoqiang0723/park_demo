import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  phone:'';
  Tip:any = '请输入登录手机号码';
  pasd:any = '请输入密码';
  constructor(private fb: FormBuilder,private router: Router) {}
 
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.Tip = '请输入你的登录号码';
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log('this.validateForm.errors',this.validateForm.valid)
    if(this.validateForm.valid){
        this.router.navigate([ '/park'])
    }
  }

  Tips():void {
    this.Tip = '请输入11位手机号码'
  }
  Psws():void {
    this.pasd = '至少6位字符'
  }
  

  ngOnInit(): void {
    this.Tip='请输入11位手机号码';
    this.pasd = '请输入密码';
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required,Validators.minLength(11),Validators.pattern(new RegExp(/^1[3456789]\d{9}$/),)]],
      password: [null, [Validators.required,Validators.minLength(6),]],
      remember: [true]
    });
  }
}
