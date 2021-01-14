import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Components that contains all dashboard functionality for the logged in user.
 * The <router-outlet> element is part of this component, so all routed components
 * that is a child of this component (i.e. /dashboard/{component-name}) will appear
 * within this component.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  customer;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Logs the user out and navigates to root.
   *
   */
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
