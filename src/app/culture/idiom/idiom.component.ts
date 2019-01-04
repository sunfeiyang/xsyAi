import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) { }

  idiom: Result;

  getPage(): void {
    const cultype = 'idiom';
    // 获得查询框中的内容
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype,value_search)
      .subscribe(res => this.idiom = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.idiom = res
      )
    );
  }
}
