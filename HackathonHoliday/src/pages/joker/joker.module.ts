import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JokerPage } from './joker';

@NgModule({
  declarations: [
    JokerPage,
  ],
  imports: [
    IonicPageModule.forChild(JokerPage),
  ],
})
export class JokerPageModule {}
