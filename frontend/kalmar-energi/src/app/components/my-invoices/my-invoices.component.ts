import { Component, OnInit } from '@angular/core';
import { InvoiceListService } from '../../services/invoice-list.service';
import { IInvoice } from 'src/app/models/invoice';

/**
 * Component that shows the customer's invoiced in a list.
 *
 */
@Component({
  selector: 'app-my-invoices',
  templateUrl: './my-invoices.component.html',
  styleUrls: ['./my-invoices.component.scss']
})
export class MyInvoicesComponent implements OnInit {

  invoices: IInvoice;
  invoiceNumber: string;
  invoiceUrl: string;
  invoicePDF;

  constructor(private invoiceListService: InvoiceListService) { }

  ngOnInit(): void {
    this.invoiceListService.getInvoiceList().subscribe(invoiceListData => {
      this.invoices = invoiceListData;
    });
  }

  /**
   * Checks if an invoice is fully paid or not. Returns true if invoice is paid in full.
   *
   * @param remainingAmount The remaining amount to pay.
   */
  paidInFull(remainingAmount: number): boolean {
    if (remainingAmount > 0) {
      return false;
    }
    return true;
  }

  /**
   * Method for opening a separate invoice as an PDF-file.
   *
   * @param invoiceNumber The id number of the invoice to open.
   */
  openPDF(invoiceNumber: string) {
    this.invoiceListService.getPDF(invoiceNumber).subscribe(invoicePDFData => {
      this.invoicePDF = invoicePDFData;
      window.open(this.invoicePDF);
    });
  }
}
