import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  loading = false;

  famous: Result;

  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) { }

  getPage(): void {
    const cultype = 'famous';
    // 获得查询框中的内容
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype, value_search)
      .subscribe(res => this.famous = res);
  }

  ngOnInit() {
    this.getPage();
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.famous = res
      )
    );
    // this.loading = false;
  }

}
