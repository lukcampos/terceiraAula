import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user', // é a tag pra adicionar um webcomponet
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  formUser:FormGroup; // declarar uma variavel do tipo FormGroup

  constructor(private formBuilder:FormBuilder) {
    // Estrutura do formuário de usuário com dados pré definidos

    this.formUser = this.formBuilder.group({
        nome: [{value:"João", disabled:false}],
        sobrenome: [{value:"João", disabled:false}],
        email:[{value:"joao@gmail.com", disabled:false}],
        telefone: "+1189874824"
    })

  }

  ngOnInit() {

  }

}
