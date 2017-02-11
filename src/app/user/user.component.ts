import { Component } from '@angular/core';
import {  Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  Directives:[]
})
export class UserComponent {

  constructor(private router:Router) { }

   onNavigate()
   {
     this.router.navigate(['./']);
   }

}
