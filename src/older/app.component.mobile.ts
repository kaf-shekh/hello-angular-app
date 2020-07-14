import { Component, OnInit } from '@angular/core';  
  
@Component({  
    selector: 'app-mobile',  
    templateUrl: 'app.component.mobile.html'  
})  
  
export class MobileComponent implements OnInit {  
  
     data: Array<any> = [];  
  
    constructor() {  
        this.data = [{ name: 'Galaxy Tab 3', company: 'Samsung', quantity: '10', price: '25000.00' },  
        { name: 'Galaxy Tab 5', company: 'Samsung', quantity: '50', price: '55000.00' },  
        { name: 'G4', company: 'LG', quantity: '10', price: '40000.00' },  
        { name: 'Canvas 3', company: 'Micromax', quantity: '25', price: '18000.00' }];  
    }  
  
    ngOnInit(): void {  
    }  
}  