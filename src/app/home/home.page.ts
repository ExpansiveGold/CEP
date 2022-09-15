
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  valor: any;
  cep: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  pesquisar() {
    console.log(this.cep);
    
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(res =>{
      this.valor = res;
      console.log(this.valor);
    });
  }
}

