import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.LogOut = this.authService.isLoggedIn();
    console.log(this.authService.isLoggedIn());
  }
  @Input() LogOut?:boolean;
  logout() {
    if (this.authService.logout()) this.router.navigate(['/auth/login']);
    this.LogOut = this.authService.isLoggedIn();
    console.log(this.authService.isLoggedIn());
    console.log(this.LogOut);
  }
}
