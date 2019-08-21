import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http' // faz chamadas http
@Component({
  selector: 'app-user', // é a tag pra adicionar um webcomponet
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser:FormGroup; // declarar uma variavel do tipo FormGroup
  userAPIUrl:string = "https://randomuser.me/api" // api de usários aleatórios
  user:Object; //armazenar objeto de usuário aleatório
  constructor(
    private formBuilder:FormBuilder,
    private http:HttpClient//faz chamas http
  ) {
    // Estrutura do formuário de usuário com dados pré definidos
    this.formUser = this.formBuilder.group({
        nome: [{value:"João", disabled:false}],
        sobrenome: [{value:"João", disabled:false}],
        email:[{value:"joao@gmail.com", disabled:false}],
        telefone: "+1189874824"
    })
  }
//
async novoUsuario(){

  this.user = await  this.http.get(this.userAPIUrl).toPromise()

  //faz update do formulário
  this.formUser.controls['nome'].setValue(this.user['results'][0]['name']['first'])
  //faz update do formulário
  this.formUser.controls['sobrenome'].setValue(this.user['results'][0]['name']['last'])

  // faz update do e-mail
  this.formUser.controls['email'].setValue(this.user['results'][0]['email'])
}

  // https://github.com/lukcampos/terceiraAula
  ngOnInit() {
    //um novo usuário
    this.novoUsuario()
  }

}
