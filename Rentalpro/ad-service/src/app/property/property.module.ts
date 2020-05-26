import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListsComponent } from './property-lists/property-lists.component';
import { PropertyComponent } from './property.component';
import { FormsModule } from '@angular/forms';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule
  ],
  declarations: [AddPropertyComponent, PropertyDetailsComponent, PropertyListsComponent, PropertyComponent, EditDetailsComponent]
})
export class PropertyModule { }
