import { Component, OnInit } from '@angular/core';
import {CultureService, Result} from '../service/culture/culture.service';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  famous: Result;

  constructor(private cultureService: CultureService) { }

  getPage(): void {
    const cultype = 'famous';
    this.cultureService.getData(cultype)
      .subscribe(res => this.famous = res);
  }

  ngOnInit() {
    this.getPage();
  }

}
