import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../service/culture/culture.service';

@Component({
  selector: 'app-dic',
  templateUrl: './dic.component.html',
  styleUrls: ['./dic.component.css']
})

export class DicComponent implements OnInit {

  dic: Result;

  constructor(private cultureService: CultureService) { }

  getPage(): void {
    const cultype = 'dic';
    this.cultureService.getData(cultype)
      .subscribe(res => this.dic = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
