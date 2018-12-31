import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {
  tabs = [];
  nzTabPosition = 'top';
  selectedIndex = 0;

  /* tslint:disable-next-line:no-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) {
      this.tabs.push({
        name   : `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
  }

}
