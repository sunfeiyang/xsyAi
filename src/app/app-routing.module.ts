import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdiomComponent} from './culture/idiom/idiom.component';
import {UpfileComponent} from './upfile/upfile.component';
import {AllegoricalComponent} from './culture/allegorical/allegorical.component';
import {DicComponent} from './culture/dic/dic.component';
import {FamousComponent} from './culture/famous/famous.component';
import {PoemComponent} from './culture/poem/poem.component';
import {TodayHistoryComponent} from './culture/today-history/today-history.component';
import {WordSeaComponent} from './culture/word-sea/word-sea.component';

const routes: Routes = [
  {path: '', component: AllegoricalComponent},
  {path: 'OCR', component: UpfileComponent},
  {path: 'Allegorical', component: AllegoricalComponent},
  {path: 'Dic', component: DicComponent},
  {path: 'Famous', component: FamousComponent},
  {path: 'Idiom', component: IdiomComponent},
  {path: 'Poem', component: PoemComponent},
  {path: 'TodayHistory', component: TodayHistoryComponent},
  {path: 'WordSea', component: WordSeaComponent},
  {path: '*', redirectTo: '/xsyAi', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
