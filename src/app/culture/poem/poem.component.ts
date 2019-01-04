import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) {
  }

  public poem: Result;

  getPage(): void {
    const cultype = 'poem';
    // 获得查询框中的内容
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype,value_search)
      .subscribe(res => this.poem = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.poem = res
      )
    );
  }
}
