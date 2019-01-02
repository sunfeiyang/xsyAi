import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public poem: Result;

  private pageNum = Math.ceil(Math.random() * 160);

  ngOnInit() {
    this.http.get('/yy/selpoemPage/自?pageSize=20&pageNum=' + this.pageNum).subscribe(res => {
      this.poem = <Result>res;
    });
  }

}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}

