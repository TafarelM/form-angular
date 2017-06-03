import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { CampoControlErroComponent } from '../shared/campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule,
  ],
  declarations: [
    TemplateFormComponent,
  ]
})
export class TemplateFormModule { }
