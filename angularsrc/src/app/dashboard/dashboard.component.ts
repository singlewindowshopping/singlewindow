import { Component, OnInit,Inject } from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
     private dom: Document;
     promocodes;
     constructor(@Inject(DOCUMENT) dom: Document) {
         
             this.promocodes = [
              {
                  companyName: "abc",
                  promoCode: "test"
                },
              {
                  companyName: "abc1",
                  promoCode: "vcbcbb"
                }
           ];
        }
       ngOnInit() {
         
       }
      
      //       public copyToClipboard(){
      //       var el = document.getElementById('');
      //       el.setAttribute('contenteditable','true');
      //       el.focus();
      //       document.execCommand('selectAll');
      //       document.execCommand('copy');
      //       el.setAttribute('contenteditable','false');
      //       el.blur();
      //  }
        


}
