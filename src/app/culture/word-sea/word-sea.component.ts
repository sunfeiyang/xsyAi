import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-word-sea',
  templateUrl: './word-sea.component.html',
  styleUrls: ['./word-sea.component.css']
})
export class WordSeaComponent implements OnInit {

  loading = true;

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) {
  }

  public wordSea: Result;

  getPage(): void {
    const cultype = 'wordSea';
    // 获得查询框中的内容
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype,value_search)
      .subscribe(res => this.wordSea = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.wordSea = res
      )
    );
    this.loading = false;
  }

}
