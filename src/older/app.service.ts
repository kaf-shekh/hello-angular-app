import { Injectable } from "@angular/core";  
  
@Injectable()  
export class StudentService {  
    private _studentList: Array<any> = [];  
  
    constructor() {  
        this._studentList = [{name:'Amit Roy', age:20, city:'Kolkata', dob:'01-01-1997'}];  
    }  
  
    returnStudentData(): Array<any> {  
        return this._studentList;  
    }  
  
    addStudentData(item: any): void {  
        this._studentList.push(item);  
    }  
}  