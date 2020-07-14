import { Component, OnInit } from '@angular/core';  
import { DemoService } from './app.service';  
  
@Component({  
  selector: 'child',  
  templateUrl: './child.component.html',  
  styleUrls : ['./custom.css']  
})  
export class ChildComponent implements OnInit {    
    constructor(private demoService:DemoService){  
    }  
  
    ngOnInit(){      
    }  
} 