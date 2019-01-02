import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-today-history',
  templateUrl: './today-history.component.html',
  styleUrls: ['./today-history.component.css']
})
export class TodayHistoryComponent implements OnInit {

  loading = false;
  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    this.loading = true;
    if (this.data.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.data = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
  }

  constructor(private http: HttpClient) {
  }

  public todayHistory: Result;

  private pageNum = Math.ceil(Math.random() * 100);

  ngOnInit() {
    this.http.get('/yy/seltoday/1').subscribe(res => {
      this.todayHistory = <Result>res;
    });
  }
}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}
