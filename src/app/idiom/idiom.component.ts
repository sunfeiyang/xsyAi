import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  panels = [
    {
      active    : true,
      disabled  : false,
      name      : 'This is panel header 1',
      childPanel: [
        {
          active: true,
          name  : 'This is panel header 1-1'
        },
        {
          active: false,
          name  : 'This is panel header 1-2'
        }
      ]
    },
    {
      active  : false,
      disabled: true,
      name    : 'This is panel header 2'
    },
    {
      active  : false,
      disabled: false,
      name    : 'This is panel header 3'
    }
  ];

  constructor(private http: HttpClient) { }

  public idiom: Result;

  ngOnInit() {
    this.http.get('/yy/selidiomPage/自?pageSize=20&pageNum=0').subscribe(res => {this.idiom = <Result>res; });
    // this.http.get('/yy/idiom/爱?rows=10&page=1').subscribe(res => {this.idiom = <Result>res; });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
