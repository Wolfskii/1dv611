// Interface for customerinformation
export interface IProfile {
Content: {
   Customer: {
   CustomerId: number;
   CustomerCode: string;
   FirstName: string;
   LastName: string;
   PinCode: number;
   CompanyCode: number;
   IsPrivatePerson: boolean;
   IsPrivateCompany: boolean;
   PostStreetName: string;
   PostStreetQualifier: string;
   PostStreetNumberSuffix: string;
   PostApartmentNumber: string;
   PostFloorNumber: number;
   PostZipCode: string;
   PostCity: string;
   PostCountryName: string;
   InvoiceStreetName: string;
   InvoiceStreetQualifier: string;
   InvoiceStreetNumberSuffix: string;
   InvoiceApartmentNumber: string;
   InvoiceFloorNumber: number;
   InvoiceZipCode: string;
   InvoiceCity: string;
   InvoiceCountryName: string;
   HomePhoneNumber: string;
   BusinessPhoneNumber: string;
   MobilePhoneNumber: string;
   AcceptsEmail: boolean;
   AcceptsSMS: boolean;
   Email1: string;
   Email2: string;
   Email3: string;
   ObjectVersion: number;
   };
};
}
