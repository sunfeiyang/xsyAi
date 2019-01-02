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

  private pageNum = Math.ceil(Math.random() * 800);

  private url = '/yy/selallegoricalPage/自?pageSize=20&pageNum=' + this.pageNum;

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.allegorical = <Result>res;
    });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
