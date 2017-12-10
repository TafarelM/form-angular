import { CepService } from './../shared/services/cep.service';
import { Http } from '@angular/http';
import { BasicValidators } from './../shared/validators/basic.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

import { ConsultarCepService } from '../shared/services/consultar-cep.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public showCollapse = false;
  public formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: Http,
    private cepService: CepService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    // validação form
    this.formulario = this.fb.group({
      nome: this.fb.control(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: this.fb.control(null, [
        Validators.required,
        BasicValidators.email
      ]),
      cep: this.fb.control(null, [Validators.required]),
      numero: this.fb.control(null, [Validators.required]),
      complemento: this.fb.control(null, []),
      rua: this.fb.control(null, [Validators.required]),
      bairro: this.fb.control(null, [Validators.required]),
      cidade: this.fb.control(null, [Validators.required]),
      estado: this.fb.control(null, [Validators.required])
    });
  }

  public consultaCEP() {
    let cep = this.formulario.get('cep').value;

    this.cepService
      .consultaCEP(cep, this.resetaDadosForm, this.formulario)
      .subscribe(dados => this.populaDadosForm(dados));
  }

  public populaDadosForm(dados): void {
    this.formulario.patchValue({
      rua: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }

  public resetaDadosForm(formulario): void {
    formulario.patchValue({
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    });
  }

  public onSubmit(): void {
    if (this.formulario.valid) {
      this.cepService.formSend(this.formulario.value).subscribe(
        dados => {
          // console.log(dados);
          // this.formulario.reset();
          this.resetar();
        },
        (error: any) => alert('erro')
      );
    } else {
      console.log('formulario invalido');
    }
  }

  public resetar(): void {
    this.formulario.reset();
    console.log('form reset');
  }

  public collapse(): void {
    this.showCollapse = !this.showCollapse;
  }
}
