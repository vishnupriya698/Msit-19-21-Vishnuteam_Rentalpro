import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "index",
    loadChildren: "./index/index.module#IndexModule"
  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"
  },
  {
    path: "property",
    loadChildren: "./property/property.module#PropertyModule"
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
