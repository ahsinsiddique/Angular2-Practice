import { Component ,OnInit} from '@angular/core';
import  {HightlightDirective} from './shared/hightlight.directive';
import {LogService} from './log.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  directives:[HightlightDirective],
  providers:[LogService]
})
export class AppComponent implements OnInit{
  constructor(private logService:LogService)
  {}
  data1:string[]=[];
  ngOnInit()
  {
    for(let i=0;i<5;i++)
    {
      this.data1.push('new data: ' + i);
    }
  }
  private switch=true;
  onSwitch(){
    this.switch=!this.switch;
  }
  private ahsan=[1, 2, 3, 4, 5];
 private val1=100;
  onSelect(str:string){
    this.logService.addData(str);
  }
  

}
