import { Component, OnInit } from '@angular/core';  
import { DemoService } from './app.service';  
  
@Component({  
  selector: 'parent',  
  templateUrl: './parent.component.html',  
  styleUrls : ['./custom.css'],  
  providers:[DemoService]  
})  
export class ParentComponent implements OnInit {    
    constructor(private demoService:DemoService){  
    }  
  
    ngOnInit(){      
    }  
}  