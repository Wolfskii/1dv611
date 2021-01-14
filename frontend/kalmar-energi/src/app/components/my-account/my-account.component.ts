import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { IProfile } from 'src/app/models/profile';

// Message for the sucess message label.
const successfulSaveMessage = 'Ändringar sparade.';

/**
 * Component that shows the customer's profile information and gives the customer
 * the opportunity to change their email-address.
 *
 */
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  profile: IProfile;
  invoiceAdress: string;
  submitted = false;
  successMessage = '';

  constructor(private profileService: ProfileService) { }


  /**
   * On component initiation the customer profile is fetched from the server.
   *
   */
  ngOnInit(): void {
    this.getCustomerProfile();
  }


  /**
   * To populate the fields in the form this function calls the profile service to get a
   * customer profile. In the callback the profile is saved to the component state, and an
   * invoice adress is built from properties in the profile. The view is bound to the profile and
   * will fill inputs.
   *
   */
  getCustomerProfile(): void {
    this.profileService.getCustomerProfile().subscribe(profile => {
      this.profile = profile;
      this.setInvoiceAdress();
    });
  }

  /**
   * Builds and sets the invoice adress to the state.
   *
   */
  setInvoiceAdress(): void{
    const invoiceStreetName = this.profile.Content.Customer.InvoiceStreetName || '';
    const invoiceStreetQualifier = this.profile.Content.Customer.InvoiceStreetQualifier || '';
    const invoiceNumberSuffix = this.profile.Content.Customer.InvoiceStreetNumberSuffix || '';

    const invoiceAdress = `${invoiceStreetName} ${invoiceStreetQualifier} ${invoiceNumberSuffix}`;

    this.invoiceAdress = invoiceAdress.trim();
  }

  /**
   * When the save button is clicked this function is called to send the customer profile to the
   * profile service. In the callback the success message is set which will be used to notify the
   * customer of a successful save.
   */
  onEditSave(): void {
    this.profileService.updateCustomerEmail(this.profile).subscribe(() => {
      this.successMessage = successfulSaveMessage;
    });
  }

  /**
   * Sets the email state to the value sent from the child component.
   *
   */
  onEmailChange($email: string): void {
    this.profile.Content.Customer.Email1 = $email;
  }
}
