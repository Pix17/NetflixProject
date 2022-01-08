import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
  
})
export class FaqComponent implements OnInit {


  
  faPlus = faPlus;

  isExpanded1 = true;
  count1: number = 0;


  isExpanded2 = true;
  count2: number = 0;


  isExpanded3 = true;
  count3: number = 0;


  isExpanded4 = true;
  count4: number = 0;


  isExpanded5 = true;
  count5: number = 0;

  isExpanded6 = true;
  count6: number = 0;






  expand1():void {
    this.isExpanded1 = false;
    
    this.count1++

    if(this.count1 % 2 == 0){
      this.isExpanded1 = true;
    }

    
  }



  expand2():void {
    this.isExpanded2 = false;
    
    this.count2++

    if(this.count2 % 2 == 0){
      this.isExpanded2 = true;
    }

    
  }



  expand3():void {
    this.isExpanded3 = false;
    
    this.count3++

    if(this.count3 % 2 == 0){
      this.isExpanded3 = true;
    }

    
  }




  expand4():void {
    this.isExpanded4 = false;
    
    this.count4++

    if(this.count4 % 2 == 0){
      this.isExpanded4 = true;
    }

    
  }




  expand5():void {
    this.isExpanded5 = false;
    
    this.count5++

    if(this.count5 % 2 == 0){
      this.isExpanded5 = true;
    }

    
  }




  expand6():void {
    this.isExpanded6 = false;
    
    this.count6++

    if(this.count6 % 2 == 0){
      this.isExpanded6 = true;
    }

    
  }



  constructor() { }

  ngOnInit(): void {
  }

}
