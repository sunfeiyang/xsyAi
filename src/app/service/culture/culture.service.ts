import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// 此装饰器的作用是决定能否把别的构造器注入到本服务中 申明此注解的服务才可以在本服务中注入别的服务
// 决定该服务是否能够注入到别的服务中是根据providers中决定的
@Injectable({
  providedIn: 'root'
})
export class CultureService {

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

  getAllegoricalPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlAllegorical);
  }

  getDicPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlDic);
  }

  getFamousPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlFamous);
  }

  getIdiomPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlIdiom);
  }

  getPoemPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlPoem);
  }

  getTodayHistoryPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlTodayHistory);
  }

  getWordSeaPage(): Observable<Result> {
    // @ts-ignore
    return this.http.get<Result[]>(this.urlWordSea);
  }



  // 根据不同的culType请求不同的数据
  getData(culType: String) {
    if (culType === 'allegorical') {
      return this.getAllegoricalPage();
    } else if (culType === 'dic') {
      return this.getDicPage();
    } else if (culType === 'famous') {
      return this.getFamousPage();
    } else if (culType === 'idiom') {
      return this.getIdiomPage();
    } else if (culType === 'poem') {
      return this.getPoemPage();
    } else if (culType === 'todayHistory') {
      return this.getTodayHistoryPage();
    } else if (culType === 'wordSea') {
      return this.getWordSeaPage();
    }
  }
}
export class Result {
  code: number;
  msg: String;
  data: JSON;
}

