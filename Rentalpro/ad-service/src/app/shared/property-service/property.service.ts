import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Property } from '../models/property.model';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  property: Property;
  constructor(private http: HttpClient) { }
  

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  

  postPropertyAd (property: Property): Observable<Property> {
    return this.http.post<Property>(environment.apiBaseUrl+'/addProperty', property, this.noAuthHeader)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllPropertyAds(): Observable<Property[]> {
    return this.http.get<Property[]>(environment.apiBaseUrl+'/getAllProperty')
  }

  getPropertyAdsDetails(id: String): Observable<Property> {
    return this.http.get<Property>(environment.apiBaseUrl+'/getPropertyAdsDetails/' + id,  this.noAuthHeader)
  }

  updateProperty(property: Property): Observable<Property> {
    return this.http.put<Property>(environment.apiBaseUrl+'/updateProperty/'+ this.getter()._id, property, this.noAuthHeader)
  }

  removeProperty(id: String) {
    return this.http.delete(environment.apiBaseUrl+'/removeProperty/' + id, this.noAuthHeader)
  }

  setter(property: Property) {
    this.property = property;
  }

  getter() {
    return this.property;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
