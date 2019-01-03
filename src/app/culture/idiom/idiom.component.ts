import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';

@Component({
  selector: 'app-idiom',
  templateUrl: './idiom.component.html',
  styleUrls: ['./idiom.component.css']
})
export class IdiomComponent implements OnInit {

  constructor(private cultureService: CultureService) { }

  idiom: Result;

  getPage(): void {
    const cultype = 'idiom';
    this.cultureService.getData(cultype)
      .subscribe(res => this.idiom = res);
  }

  ngOnInit() {
    this.getPage();
  }
}
