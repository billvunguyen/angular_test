import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  employeeList: any;
  list: any;

  totalLength: any;
  page: number = 1;

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    
    // call API to get data
    this.http.get('https://dummy.restapiexample.com/api/v1/employees')
    .subscribe(Response => {
      console.log(Response)
      this.list = Response;
      this.employeeList = this.list.data;
      console.log(this.employeeList);
      
      this.totalLength = this.employeeList.length;
      console.log(this.totalLength);
    });
  }

  key: string = 'id';

  sort(key: any) {
    this.key = key;
  }

}



