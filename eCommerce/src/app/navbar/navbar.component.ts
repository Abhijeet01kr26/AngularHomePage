import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchQuery: string = '';

  performSearch(query: string) {
    console.log('Searching for:', query)
  }

  openNavbarContent(menu:any){
    
  }
  navigateTo(path:any){
    
  }
}
