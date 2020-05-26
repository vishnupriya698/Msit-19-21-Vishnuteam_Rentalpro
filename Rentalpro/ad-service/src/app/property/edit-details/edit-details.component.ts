import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/property-service/property.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  property: Property;
  
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private router: Router, private route: ActivatedRoute, private propertyService: PropertyService) { }


  ngOnInit() {
    this.property = this.propertyService.getter();
  }

  updateProperty(form: NgForm) {
    this.propertyService.updateProperty(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.router.navigate(['/property/property-center'])
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

}
