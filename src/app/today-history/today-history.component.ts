import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../service/culture/culture.service';

@Component({
  selector: 'app-today-history',
  templateUrl: './today-history.component.html',
  styleUrls: ['./today-history.component.css']
})
export class TodayHistoryComponent implements OnInit {

  constructor(private cultureService: CultureService) {
  }

  public todayHistory: Result;

  getPage(): void {
    const cultype = 'todayHistory';
    this.cultureService.getData(cultype)
      .subscribe(res => this.todayHistory = res);
  }

  ngOnInit() {
    this.getPage();
  }
}
