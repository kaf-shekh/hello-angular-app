import { Component, OnInit, EventEmitter, Output } from '@angular/core';  
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';  
  
@Component({  
  selector: 'employee-add',  
  templateUrl: 'app.component.employeeadd.html'  
})  
  
export class AddEmployeeComponent implements OnInit {  
  
  public _model: any = {};  
  @Output()  onHide: EventEmitter<boolean> = new EventEmitter<boolean>();  
  
  constructor( http: HttpClient) {  
  }  
  
  ngOnInit(): void {  
  
  }  
  
  public onCancel(): void {  
    this._model = {};  
    this.onHide.emit(false);  
  }  
  
  public submit(): void {  
    if (this.validate()) {  
      let self = this;  
      const httpOptions = {  
        headers: new HttpHeaders({  
          'Content-Type': 'application/json; charset=utf-8'  
        })  
      };  
      this.http.post("http://localhost:81/SampleAPI/employee/AddEmployee", this._model, httpOptions)  
        .subscribe((res: Response) => {  
          self.onCancel();  
        });  
  
    }  
  }  
  
  private reset(): void {  
    this._model = {};  
  }  
  
  private validate(): boolean {  
    let status: boolean = true;  
    if (typeof (this._model.code) === "undefined") {  
      alert('Alias is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.name) === "undefined") {  
      alert('Name is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.dob) === "undefined") {  
      alert('dob is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.doj) === "undefined") {  
      alert('DOJ is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.department) === "undefined") {  
      alert('Department is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.designation) === "undefined") {  
      alert('Designation is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.salary) === "undefined") {  
      alert('Salary is Blank');  
      status = false;  
      return;  
    }  
    return status;  
  }  
}  