import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Import necessary Angular Material modules for the layout
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  standalone: true,
  imports: [
    // Angular Router Modules
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    // Angular Material Modules
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
  ],
  selector: 'app-fugitive-root',
  templateUrl: './app.html',
  styleUrl: './app.scss', // We will add a style file
})
export class AppComponent {
  title = 'Fugitive';
}
