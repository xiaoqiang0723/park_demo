import { Component, OnInit } from '@angular/core';
import { ParkserviceService } from '../../services/parkservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  current = 0;
  constructor(public park:ParkserviceService,private router: Router) {}
  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    this.park.showpark()
    let aaa = {name:'xxx',number:5,address:'中山路',carnumber:10,takeupparkingSpaces:5,freeparking:8,yardcondition:"开放",principal:"xxx",phonenumber:"135xxxxxxxxxx"}
    this.park.currentPageDataChange([aaa],1,0);
    this.router.navigate(['/park']);
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  
  

  ngOnInit() {
  }

}
