import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/shared/property-service/property.service';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
}
