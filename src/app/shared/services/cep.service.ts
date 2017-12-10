import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class CepService {
  constructor(private http: Http) {}

  public consultaCEP(cep, resetaFormCallback, formulario): any {
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

  public formSend(formulario: any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `https://httpbin.org/post`,
        JSON.stringify(formulario),
        new RequestOptions({ headers: headers })
      )
      .map(response => {
        response.json();
        console.log(response);
      });
  }

  /*
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // transforma o order em formato json para enviar no  metodo post
  return this.http
    .post(
      `${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers })
    )
    .map(response => response.json())
    .map(order => order.id);
    */
}
