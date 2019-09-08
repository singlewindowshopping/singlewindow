import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
    countries;
    constructor(){
          this.countries=[
           {
             countryname:"USA",
             image: "usa.jpg",
             target: "_self",
             routerLink: "USA"
           },
           {
             countryname:"India",
             image: "india.jpg",
             target: "_self",
             routerLink: "India"
           },
           {
             countryname:"china",
             image: "china.jpg",
             target: "_self",
             routerLink: "China"
           },
           {
             countryname:"UK",
             image: "uk.jpg",
             target: "_self",
             routerLink: "Uk"
           }
     ]
    }
     ngOnInit(){
    
  }
    
}
