import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-word-sea',
  templateUrl: './word-sea.component.html',
  styleUrls: ['./word-sea.component.css']
})
export class WordSeaComponent implements OnInit {

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  constructor(private http: HttpClient) {
  }

  public wordsea: Result;

  private pageNum = Math.ceil(Math.random() * 4500);

  ngOnInit() {
    this.http.get('/yy/selwordseaPage/自?pageSize=20&pageNum=' + this.pageNum).subscribe(res => {
      this.wordsea = <Result>res;
    });
  }

}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}
