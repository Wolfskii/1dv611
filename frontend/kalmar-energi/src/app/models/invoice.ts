// Interface for getting invoice data.
export interface IInvoice {
  Content: {
    InvoiceParts: {
      InvoiceId: number;
      InvoiceNumber: string;
      InvoiceDate: string;
      PresentDueDate: string;
      Amount: number;
      RemainingAmount: number;
    };
  };
}
