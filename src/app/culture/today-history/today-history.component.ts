import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-today-history',
  templateUrl: './today-history.component.html',
  styleUrls: ['./today-history.component.css']
})
export class TodayHistoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) {
  }

  public todayHistory: Result;

  getPage(): void {
    const cultype = 'todayHistory';
    // 获得查询框中的内容
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype,value_search)
      .subscribe(res => this.todayHistory = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.todayHistory = res
      )
    );
  }
}
