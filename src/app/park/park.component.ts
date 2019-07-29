import { Component, OnInit } from '@angular/core';
import { ParkserviceService } from '../services/parkservice.service';



@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent implements OnInit {
  
  constructor(public park:ParkserviceService) {}
  
  
  currentPageDataChange($event){
    console.log('event',$event)
  }

  newpark(){
   this.park.hiddenpark();
    
  }

  parkHasHidden(){
    
  }
  
  ngOnInit(): void {
 
  }

}
