import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';  
import { Validators, FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

  
import { AppComponent } from './app.component';  
//import { SignupFormComponent } from './signup.component'
  
@NgModule({  
  declarations: [  
    AppComponent//, SignupFormComponent  
  ],  
  imports: [  
    BrowserModule, FormsModule, ReactiveFormsModule  
    ],  
  providers: [],  
  bootstrap: [AppComponent],  
  schemas: [NO_ERRORS_SCHEMA]  
})  
export class AppModule { }  