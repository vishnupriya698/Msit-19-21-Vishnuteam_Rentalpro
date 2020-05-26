import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyListsComponent } from './property-lists/property-lists.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyComponent } from './property.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  {
    path: "property-center",
    component: PropertyComponent,
    children:[
      {
        path: "",
        component: PropertyListsComponent,
        children: [
          {
            path: ":id",
            component: PropertyDetailsComponent
          },
        ]
      },
    ]
  },
  {
    path: "new-ad",
    component: AddPropertyComponent
  },
  {
    path: "details",
    component: PropertyDetailsComponent
  },

  {
    path: "edit-details/:id",
    component: EditDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
