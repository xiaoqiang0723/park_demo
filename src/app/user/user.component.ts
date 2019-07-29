import { Component, OnInit } from '@angular/core';
import { ParkserviceService } from '../services/parkservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  validateForm: FormGroup;
  position = 'left';
  
  constructor(private fb: FormBuilder,public park:ParkserviceService) {}
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  hiddenuser():void{
   this.park.hiddenuser();
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
    });
  }
}

