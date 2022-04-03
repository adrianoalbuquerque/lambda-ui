import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input() id: string = '';
  @Input() nomeBotao: string = "Nome do Botão da Lib";
  @Input() classe: string = "primary";
  @Input() desabilitado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
