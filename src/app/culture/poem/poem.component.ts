import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../../service/culture/culture.service';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  constructor(private cultureService: CultureService) {
  }

  public poem: Result;

  getPage(): void {
    const cultype = 'poem';
    this.cultureService.getData(cultype)
      .subscribe(res => this.poem = res);
  }

  ngOnInit() {
    this.getPage();
  }
}
