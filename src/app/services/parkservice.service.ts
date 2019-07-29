import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkserviceService {
  hidden = false;
  flag:boolean = true;
  newlist = [];
  total = 0;
  pageIndex =0;
  pageSize = 10;
  constructor() { }
  showuser(){
    this.flag = false;
  }
  hiddenuser(){
    this.flag = true;
  }
  showpark(){
    this.hidden = false;
  }
  hiddenpark(){
    this.hidden = true;
  }
  delete(index){
    this.currentPageDataChange([],0,index);
  }
  currentPageDataChange($event: Array<{ name: string; number: number; address: string; carnumber: number;takeupparkingSpaces:number;freeparking:number;yardcondition:string;principal:string;phonenumber:string}>, data1,index): void {  
    if(data1 == 1){
      this.newlist = this.newlist.concat($event)
      this.total=this.total +1;   
    }else if(data1 ==0){
      this.newlist.splice(index,1);
      this.total=this.total -1;
    }
    this.pageIndex= Math.floor((this.total + this.pageSize-1)/this.pageSize)
  }
}
