import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styleUrls: ['./dic.component.css']
})

export class DicComponent implements OnInit {

  shuoming = [
    {
      jianjie    : '【释义】',
      xiangjie  : '【详细释义】'
    }
  ];

  shuoming1 = ['【释义】', '【详细释义】'];

  public dic: Result;

  constructor(private http: HttpClient) { }

  private pageNum = Math.ceil(Math.random() * 1000);

  ngOnInit() {
    this.http.get('/yy/seldicPage/自?pageSize=20&pageNum=' + this.pageNum).subscribe(res => {this.dic = <Result>res; });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
