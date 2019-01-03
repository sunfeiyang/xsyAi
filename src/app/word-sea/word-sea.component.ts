import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../service/culture/culture.service';

@Component({
  selector: 'app-word-sea',
  templateUrl: './word-sea.component.html',
  styleUrls: ['./word-sea.component.css']
})
export class WordSeaComponent implements OnInit {

  constructor(private cultureService: CultureService) {
  }

  public wordSea: Result;

  getPage(): void {
    const cultype = 'wordSea';
    this.cultureService.getData(cultype)
      .subscribe(res => this.wordSea = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
