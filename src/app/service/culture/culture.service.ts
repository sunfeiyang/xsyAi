import {EventEmitter, Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// 此装饰器的作用是决定能否把别的构造器注入到本服务中 申明此注解的服务才可以在本服务中注入别的服务
// 决定该服务是否能够注入到别的服务中是根据providers中决定的
@Injectable({
  providedIn: 'root'
})
export class CultureService {

  // 搜索事件流
  searchEvent: EventEmitter<Search> = new EventEmitter();

  constructor(private http: HttpClient) {}

  private pageNumAllegorical = Math.ceil(Math.random() * 800);
  private pageNumDic = Math.ceil(Math.random() * 1000);
  private pageNumFamous = Math.ceil(Math.random() * 320);
  private pageNumIdiom = Math.ceil(Math.random() * 300);
  private pageNumPoem = Math.ceil(Math.random() * 160);
  private pageNumWrodSea = Math.ceil(Math.random() * 4500);

  private urlAllegorical = '/yy/selallegoricalPage/自?pageSize=20&pageNum=' + this.pageNumAllegorical;
  private urlDic = '/yy/seldicPage/自?pageSize=20&pageNum=' + this.pageNumDic;
  private urlFamous = '/yy/selfamousPage/自?pageSize=20&pageNum=' + this.pageNumFamous;
  private urlIdiom = '/yy/selidiomPage/自?pageSize=20&pageNum=' + this.pageNumIdiom;
  private urlPoem = '/yy/selpoemPage/自?pageSize=20&pageNum=' + this.pageNumPoem;
  private urlTodayHistory = '/yy/seltoday/1';
  private urlWordSea = '/yy/selwordseaPage/自?pageSize=20&pageNum=' + this.pageNumWrodSea;

  private urlAllegoricalSel = '/yy/selallegorical/';
  private urlDicSel = '/yy/seldic/';
  private urlFamousSel = '/yy/selfamous/';
  private urlIdiomSel = '/yy/selidiom/';
  private urlPoemSel = '/yy/selpoem/';
  private urlWordSeaSel = '/yy/selwordsea/';

  // 查询框中的内容
  @Input()
  searchValue: String;

  // 传入的数据类型
  culType: String;

  getAllegoricalPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getDicPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getFamousPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getIdiomPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getPoemPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getTodayHistoryPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  getWordSeaPage(url): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(url);
  }

  // 根据不同的culType请求不同的数据
  getData(culType: String, searchValue: String) {
    this.culType = culType;
    if (culType === 'allegorical') {
      if (searchValue != null) {
        return this.getAllegoricalPage(this.urlAllegoricalSel + searchValue);
      } else {
        return this.getAllegoricalPage(this.urlAllegorical);
      }
    } else if (culType === 'dic') {
      if (searchValue != null) {
        return this.getDicPage(this.urlDicSel + searchValue);
      } else {
        return this.getDicPage(this.urlDic);
      }
    } else if (culType === 'famous') {
      if (searchValue != null) {
        return this.getFamousPage(this.urlFamousSel + searchValue);
      } else {
        return this.getFamousPage(this.urlFamous);
      }
    } else if (culType === 'idiom') {
      if (searchValue != null) {
        return this.getIdiomPage(this.urlIdiomSel + searchValue);
      } else {
        return this.getIdiomPage(this.urlIdiom);
      }
    } else if (culType === 'poem') {
      if (searchValue != null) {
        return this.getPoemPage(this.urlPoemSel + searchValue);
      } else {
        return this.getPoemPage(this.urlPoem);
      }
    } else if (culType === 'todayHistory') {
        return this.getTodayHistoryPage(this.urlTodayHistory);
    } else if (culType === 'wordSea') {
      if (searchValue != null) {
        return this.getWordSeaPage(this.urlWordSeaSel + searchValue);
      } else {
        return this.getWordSeaPage(this.urlWordSea);
      }
    }
  }

  getSearch(params: Search): Observable<Result> {
    // @ts-ignore
    // return this.http.get<Result[]>(this.urlAllegoricalSel, {search: this.encodeParams(params)});
    if (this.culType === 'allegorical') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlAllegoricalSel + this.encodeParamsSystem(params));
    } else if (this.culType === 'dic') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlDicSel + this.encodeParamsSystem(params));
    } else if (this.culType === 'famous') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlFamousSel + this.encodeParamsSystem(params));
    } else if (this.culType === 'idiom') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlIdiomSel + this.encodeParamsSystem(params));
    } else if (this.culType === 'poem') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlPoemSel + this.encodeParamsSystem(params));
    } else if (this.culType === 'todayHistory') {
      return this.getTodayHistoryPage(this.urlTodayHistory);
    } else if (this.culType === 'wordSea') {
      // @ts-ignore
      return this.http.get<Result[]>(this.urlWordSeaSel + this.encodeParamsSystem(params));
    }

  }

  private encodeParams(params: Search) {
    // let result: URLSearchParams;

    // 将传入的params 所有的参数全部取出改为一个集合
    // 对集合进行过滤 只把有内容的挑选出来
    // 然后将取出来的有内容的过滤项进行拼接
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        console.log('key' + key);
        console.log('params[key]' + params[key]);
        this.searchValue = params[key];
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams());
  }
  private encodeParamsSystem(params: Search) {
    // let result: URLSearchParams;

    // 将传入的params 所有的参数全部取出改为一个集合
    // 对集合进行过滤 只把有内容的挑选出来
    // 然后将取出来的有内容的过滤项进行拼接
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        if (key === 'keyWrod') {
          return  params[key];
        }
      }, new URLSearchParams());
  }
}
export class Search {
  keyWord: String;
}

export class Result {
  code: number;
  msg: String;
  data: JSON;
}

