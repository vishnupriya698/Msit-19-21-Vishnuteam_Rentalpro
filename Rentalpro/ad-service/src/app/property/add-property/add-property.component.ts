import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property.model';
import { NgForm } from '@angular/forms';
import { PropertyService } from 'src/app/shared/property-service/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;

  property: Property = new Property()
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  createProperty(form : NgForm) {
    this.propertyService.postPropertyAd(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    )
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
