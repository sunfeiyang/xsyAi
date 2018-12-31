import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-allegorical',
  templateUrl: './allegorical.component.html',
  styleUrls: ['./allegorical.component.css']
})
export class AllegoricalComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public allegorical: Result;

  ngOnInit() {
    this.http.get('/yy/selallegoricalPage/自?pageSize=20&pageNum=0').subscribe(res => {
      this.allegorical = <Result>res;
    });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
