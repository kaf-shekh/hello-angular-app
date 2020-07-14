import { Component, OnInit } from '@angular/core';  
  
@Component({  
    selector: 'home',  
    templateUrl: 'app.component.home.html'  
})  
  
export class HomeComponent implements OnInit {  
  
     message: string = '';  
    constructor() {  
        this.message = 'Click link to move other pages';  
    }  
  
    ngOnInit(): void {  
    }  
}  