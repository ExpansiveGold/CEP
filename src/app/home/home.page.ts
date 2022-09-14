
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError }  from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  valor: Observable<any>;
  cep: number;


  constructor(private http: HttpClient,public toastController: ToastController) { }

  ngOnInit() {
  }

  pesquisar() {
    console.log(this.valor);

    this.valor = this.http.get(`viacep.com.br/ws/${this.cep}/json/`).pipe(
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: `Erro ao consultar a API: ${erro.message}`,
      duration: 4000,
      color: 'danger',
      position: 'middle'
    });
    console.log(erro);
    toast.present();
    return null;
  }


}

