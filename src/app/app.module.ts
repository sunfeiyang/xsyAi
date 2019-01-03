import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpfileComponent } from './upfile/upfile.component';
import { HeaderComponent } from './header/header.component';
import { IdiomComponent } from './culture/idiom/idiom.component';
import { AllegoricalComponent } from './culture/allegorical/allegorical.component';
import { DicComponent } from './culture/dic/dic.component';
import { FamousComponent } from './culture/famous/famous.component';
import { PoemComponent } from './culture/poem/poem.component';
import { TodayHistoryComponent } from './culture/today-history/today-history.component';
import { WordSeaComponent } from './culture/word-sea/word-sea.component';
import {CultureService} from './service/culture/culture.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UpfileComponent,
    HeaderComponent,
    IdiomComponent,
    AllegoricalComponent,
    DicComponent,
    FamousComponent,
    PoemComponent,
    TodayHistoryComponent,
    WordSeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, CultureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
