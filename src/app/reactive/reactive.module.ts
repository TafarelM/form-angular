import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { ReactiveComponent } from './reactive.component';

@NgModule({
  imports: [
    SharedModule
   ],
  declarations: [
    ReactiveComponent
  ]
})
export class ReactiveModule { }
