import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { navigation } from './navMenu';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent {
  @Input()
  selectedSection!: string;


  category:any;

  ngOnInit() {
    
  }
  
  constructor(private router:Router){
    this.category=navigation
  }

  navigateToProducts=(path:String)=>{
    this.router.navigate([path])
    
  }
}
