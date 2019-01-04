import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styleUrls: ['./dic.component.css']
})

export class DicComponent implements OnInit {

  dic: Result;

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) { }

  getPage(): void {
    const cultype = 'dic';
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype, value_search)
      .subscribe(res => this.dic = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.dic = res
      )
    );
  }

}
