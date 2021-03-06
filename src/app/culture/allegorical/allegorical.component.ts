import {Component, Injector, OnInit} from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';
import {ActivatedRoute} from '@angular/router';

// component装饰器是 @Injectable 的一个子类 所以可以直接注入别的服务
@Component({
  selector: 'app-allegorical',
  templateUrl: './allegorical.component.html',
  styleUrls: ['./allegorical.component.css']
})
export class AllegoricalComponent implements OnInit {

  // 此方法和构造器注入器结果相同（angular内部执行顺序）
  // private cultureService: CultureService;
  // constructor(private injector:Injector) {
  //   this.cultureService = injector.get(CultureService);
  // }
  // 构造函数注入器
  constructor(private route: ActivatedRoute,
              private cultureService: CultureService) {
  }

  allegorical: Result;

  // 为输入关键字
  getPage(): void {
    const cultype = 'allegorical';
    // console.log(this.route.snapshot.paramMap);
    const value_search = this.route.snapshot.paramMap.get('serachValue');
    this.cultureService.getData(cultype, value_search)
      .subscribe(res => this.allegorical = res);
  }

  // 输入关键字的情况下，根据关键字查询
  // getSel(): void {
  //   this.cultureService.getData()
  //     .subscribe(res => this.allegorical = res);
  // }

  ngOnInit() {
    this.getPage();
    // this.http.get(this.url).subscribe(res => {
    //   this.allegorical = <Result>res;
    // });
    // 订阅搜索事件流
    this.cultureService.searchEvent.subscribe(
      params => this.cultureService.getSearch(params).subscribe(
        res => this.allegorical = res
      )
    );
  }

}
