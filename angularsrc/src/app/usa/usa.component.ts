import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

 
    ladiesClothes;
 
 
     constructor() {
     this.ladiesClothes = [
         {
             image: "rsz_emblem-ralph-lauren.jpg",
             target: "_self",
             routerLink: "https://www.w3schools.com"
          },
        {
           image: "nike.jpg",
           target: "_self",
           routerLink: "https://www.nike.com/"
         },
        {
          image: "rsz_tommy.jpg",
           target: "_self" 
        },
          {
          image: "rsz_lacoste.jpg",
           target: "_self" 
        },
          {
          image: "rsz_boos.jpg",
           target: "_self" 
        },
          {
          image: "rsz_levis-strauss-logo.jpg",
           target: "_self" 
        },
          {
          image: "A kid threw a lump of cheddar at me",
           target: "_self"  
       },
          {
          image: "A kid threw a lump of cheddar at me",
           target: "_self" 
        },
          {
          image: "A kid threw a lump of cheddar at me",
           target: "_self"  
        },
          {
          image: "A kid threw a lump of cheddar at me",
           target: "_self" 
        }
       ];




  }

  ngOnInit() {
  }

}
