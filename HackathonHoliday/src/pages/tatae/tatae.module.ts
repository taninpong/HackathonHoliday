import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TataePage } from './tatae';

@NgModule({
  declarations: [
    TataePage,
  ],
  imports: [
    IonicPageModule.forChild(TataePage),
  ],
})
export class TataePageModule {}
