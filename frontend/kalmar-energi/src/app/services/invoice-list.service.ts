import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInvoice } from '../models/invoice';

/**
 * Service for getting the customer's invoices. Both as a list of all of
 * them, and as PDF:s for individual invoices.
 *
 */
@Injectable({
  providedIn: 'root'
})

export class InvoiceListService {

  server = '/dev/invoices';

  constructor(private http: HttpClient) { }

  /**
   * Method for getting the invoices from backend.
   *
   */
  getInvoiceList(): Observable<IInvoice> {
    const token = window.localStorage.id_token;
    const authHeader: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<IInvoice>(this.server, {
      headers: authHeader
    });
  }

  /**
   * Method for opening a single invoice as a PDF.
   *
   * @param invoiceNumber The invoice id.
   */
  getPDF(invoiceNumber: string): Observable<any> {

    const invoiceUrl = this.server + '/' + invoiceNumber;

    const token = window.localStorage.id_token;
    const authHeader: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Observable<any>>(invoiceUrl, {
      headers: authHeader
    });
  }
}
