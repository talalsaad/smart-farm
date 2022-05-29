import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circal',
  templateUrl: './circal.component.html',
  styleUrls: ['./circal.component.css']
})
export class CircalComponent implements OnInit {

  constructor() { }
@Input() parenttochild:any;
@Input() textholder:any;
@Input() type:any|undefined;
  ngOnInit(): void {
  }
  setcircl(a:any){
    // if(this.parenttochild<=100)
    // {return {'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'green green transparent transparent'}}
    // else
    // {return {'transform': `rotate(${135+(1.8*100)}deg)`}}
    switch (this.type) {
      case 'water':
        if(a>=80){
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'blue blue transparent transparent'}
        }
        if (a<80 &&this.parenttochild>=50) {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'yellow yellow transparent transparent'}
          
        } else {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'red red transparent transparent'}
    
        }
          break;
      case 'tem':
        if(a>=50){
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'red red transparent transparent'}
        }
        if (a<50 &&this.parenttochild>=30) {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'yellow yellow transparent transparent'}
          
        } else {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'green green transparent transparent'}
    
        }
          break;
      case 'Humidity':
        
        if(a>=60){
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'red red transparent transparent'}
        }
        if (a<60 &&this.parenttochild>=40) {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'yellow yellow transparent transparent'}
          
        } else {
          return{'transform': `rotate(${135+(1.8*this.parenttochild)}deg)`,'border-color':'green green transparent transparent'}
    
        }
          break;
      default:
          return {};
          break;
  }


  }
  setStyleColor(a:any){
    switch (this.type) {
      case 'water':
        if(a>=80){
          return{'color':'green'}
        }
        if (a<80 &&this.parenttochild>=50) {
          return{'color':'yellow'}
          
        } else {
          return{'color':'red'}
    
        }
          break;
      case 'tem':
        if(a>=50){
          return{'color':'red'}
        }
        if (a<50 &&this.parenttochild>=30) {
          return{'color':'yellow'}
          
        } else {
          return{'color':'green'}
    
        }
          break;
      case 'Humidity':
        if(a>=60){
          return{'color':'red'}
        }
        if (a<60 &&this.parenttochild>=40) {
          return{'color':'yellow'}
          
        } else {
          return{'color':'green'}
    
        }
          break;
      default:
          return {};
          break;
  }
   
  }
}
