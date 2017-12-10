import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { InputComponent } from './components/input/input.component';

import { ConsultarCepService } from './services/consultar-cep.service';
import { DropdownService } from './services/dropdown.service';
import { CepService } from './services/cep.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    InputComponent,
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DropdownService,
        ConsultarCepService,
        CepService
      ]
    };
  }
 }
