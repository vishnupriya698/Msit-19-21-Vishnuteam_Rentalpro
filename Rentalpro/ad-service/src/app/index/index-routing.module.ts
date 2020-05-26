import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDetailsComponent} from './home-details/home-details.component'


const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "home",
        component: DashboardComponent
      },
      {
        path: "details",
        component: HomeDetailsComponent
      }
    ]
  },
  {
    path: "",
    component : DashboardComponent,
    children: [
      {
        path: "details",
        component: HomeDetailsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
