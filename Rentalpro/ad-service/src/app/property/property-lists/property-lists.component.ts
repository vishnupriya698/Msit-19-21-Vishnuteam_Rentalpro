import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/shared/property-service/property.service';
import { Property } from 'src/app/shared/models/property.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-lists',
  templateUrl: './property-lists.component.html',
  styleUrls: ['./property-lists.component.css']
})
export class PropertyListsComponent implements OnInit {

  constructor(private propertyService: PropertyService, private router: Router) { }

  ngOnInit() {
    this.getAllPropertyAds();
  }

  propertyList: Property[] = [];
  serverErrorMessages;
  getAllPropertyAds() {
    //this.spinnerService.show();
    this.propertyService.getAllPropertyAds().subscribe(
      property => {
        //this.spinnerService.hide();
        //this.propertyList.push(property)
        property.forEach(element => {
          this.propertyList.push(element);
        });
      },
      err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  updatePropertyAd(property: Property) {
    this.propertyService.setter(property);
    this.router.navigate(['/property/edit-details/' + property._id]);
  }

  removeProperty(key: string) {

    this.propertyService.removeProperty(key).subscribe(
      res => {
        this.propertyList = [];
        this.getAllPropertyAds();
      },
      err => {
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

}
