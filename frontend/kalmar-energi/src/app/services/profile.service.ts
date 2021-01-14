import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfile } from '../models/Profile';

const token = window.localStorage.id_token;
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${token}`,
  })
};

/**
 * Service fot getting a customer's profile information. The return type of the method is an observable
 * interface. The interface model is saved in the following folder: "../models/profile.ts" The
 * interface contains the same fields as the object returning from the API should do.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpoint = '/dev/customers';

  constructor(private http: HttpClient) { }

  /**
   * Method that gets the profile information.
   *
   */
  getCustomerProfile(): Observable<IProfile> {
    return this.http.get<IProfile>(this.endpoint, httpOptions);
  }

  /**
   * Method for updating the user's email-address.
   *
   * @param profile The customer's profile data.
   */
  updateCustomerEmail(profile: IProfile): Observable<IProfile> {
    return this.http.put<IProfile>(this.endpoint, profile, httpOptions);
  }
}
