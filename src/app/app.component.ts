import { Component, OnInit, } from '@angular/core'; 

import { Validators, FormBuilder, FormControl, FormGroup  } from '@angular/forms';  

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {  

    this.loginForm = this.formBuilder.group({
    first :['', [
      Validators.required,  
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$')]  
  ],
  last:['',[  
    Validators.required,  
    Validators.minLength(3),
    Validators.pattern('^[a-zA-Z ]*$')  
]],   
  
  email: [ '',[
     Validators.required,  
     Validators.email]
  ],
  mobile:['',[
    Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
   Validators.pattern("[6-9]{1}[0-9]{9}")
]
  ],
  city:['',[
  Validators.required]
 ],
  bio:['',
  Validators.required 
],
accept: [
  false, 
  Validators.requiredTrue
],

dob:['',
  Validators.required,

],
photo:['',
  Validators.required,
],
gender:['',
Validators.required
]

});  
}                  

get f() { 
  return this.loginForm.controls;
 }
 
 get g() {
  return this.loginForm.get('gender');
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}


}
  
