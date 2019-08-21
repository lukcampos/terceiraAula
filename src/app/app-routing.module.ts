import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './components/user/user.component';
import {HomePageComponent} from './components/home-page/home-page.component'

//atribuição de todas as rotas
const routes: Routes = [
  {
    path:"", //caminho
    component:HomePageComponent // vinculo com o component
  },
  {
    path:'user', // caminho
    component:UserComponent // vinculo com component
  },
  {
    path:'usuario', // caminho
    component:UserComponent // vinculo com component
  },{
    path:"home", // caminho
    component:HomePageComponent //vinculo com o componet
  },
  {
    path:'inicio',// caminho
    component: HomePageComponent //vinculo com o component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
