import {Component, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {CultureService} from '../service/culture/culture.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cultureService: CultureService, private fb: FormBuilder) {
  }


  @Output()
  value_search = '';

  // 控制导航栏是否显示
  ishidden = true;
  // 控制导航栏是否展开
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  formModel = this.fb.group({
    keyWrod: ['']
  });

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  notify(): void {
    console.log('notify');
  }

  ngOnInit() {
  }

  // 搜索按钮的查询事件
  serach() {
    // 点击按钮是 发射查询serch事件
    this.cultureService.searchEvent.emit(this.formModel.value);
  }

}
