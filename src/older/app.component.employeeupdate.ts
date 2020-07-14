import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';  
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';  
  
@Component({  
  selector: 'employee-update',  
  templateUrl: 'app.component.employeeupdate.html'  
})  
  
export class UpdateEmployeeComponent implements OnInit {  
  
  public _model: any = {};  
  
  @Input()  
  set source(data: any) {  
    this._model = data;  
  }  
  get source() {  
    return this._model;  
  }  
  
  @Output() private onHide: EventEmitter<boolean> = new EventEmitter<boolean>();  
  
  constructor(private http: HttpClient) {  
  }  
  
  ngOnInit(): void {  
    if (this._model == undefined) {  
      this._model = this.source;  
    }  
  }  
  
  public onCancel(): void {  
    this._model = {};  
    this.onHide.emit(false);  
  }  
  
  public onUpdate(): void {  
    if (this.validate()) {  
      let self = this;  
      const httpOptions = {  
        headers: new HttpHeaders({  
          'Content-Type': 'application/json; charset=utf-8'  
        })  
      };  
      this.http.put("http://localhost:81/SampleAPI/employee/UpdateEmployee", this._model, httpOptions)  
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
    if (typeof (this._model.Code) === "undefined") {  
      alert('Alias is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.Name) === "undefined") {  
      alert('Name is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.Department) === "undefined") {  
      alert('Department is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.Designation) === "undefined") {  
      alert('Designation is Blank');  
      status = false;  
      return;  
    }  
    else if (typeof (this._model.Salary) === "undefined") {  
      alert('Salary is Blank');  
      status = false;  
      return;  
    }  
    return status;  
  }  
  
  private parseDate(dateString: string): Date {  
    if (dateString) {  
      return new Date(dateString);  
    } else {  
      return null;  
    }  
  }  
}  