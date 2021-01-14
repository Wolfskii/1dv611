import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MyInvoicesComponent } from './components/my-invoices/my-invoices.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MyConsumptionComponent } from './components/my-consumption/my-consumption.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormFieldComponent } from './components/form/form-field/form-field.component';
import { InvoiceListService } from './services/invoice-list.service';
import { ProfileService } from './services/profile.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { DashboardGuard } from './guards/dashboard.guard';
import { EmailFieldComponent } from './components/form/email-field/email-field.component';

// The website's routing.
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    children: [
    {
        path: 'mina-fakturor',
        component: MyInvoicesComponent
    },
    {
        path: 'min-profil',
        component: MyAccountComponent
    },
    {
        path: 'min-forbrukning',
        component: MyConsumptionComponent
    }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavigationComponent,
    MyConsumptionComponent,
    MyInvoicesComponent,
    MyAccountComponent,
    FormFieldComponent,
    EmailFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    InvoiceListService,
    ProfileService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
