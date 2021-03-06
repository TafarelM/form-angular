import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConsultarCepService {
  constructor(private http: Http) {}

  public consultaCEP(cep, resetaFormCallback, formulario) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    if (cep != '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        resetaFormCallback(formulario);

        return this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json());
      }
    }
  }

}
