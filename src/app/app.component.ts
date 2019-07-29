import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { ParkserviceService } from './services/parkservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,public park:ParkserviceService) { 
    
  }
  flag:boolean=true;
  mapOfCheckedId: { [key: string]: boolean } = {};
  @ViewChild('app-park',{read:ElementRef,static:false}) parkComponent;

  showModal(): void {
    this.park.showuser();
  }

  showPark():void{
    this.park.showpark();
    this.router.navigate(['/park']);
  }


  

  
  ngOnInit(): void {

  }

}
