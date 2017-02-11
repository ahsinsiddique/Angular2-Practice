import {Routes,RouterModule} from "@angular/router"
import {AppComponent} from './app.component'
import {UserComponent} from './user/user.component'

const AppRoutes:Routes=[
 {path:'', component:AppComponent},
  {path:'user', component:UserComponent}
  ];

export const routing=RouterModule.forRoot(AppRoutes);
