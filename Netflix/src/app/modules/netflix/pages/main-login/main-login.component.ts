import { Component, OnInit } from '@angular/core';
import { ILink } from '@models/footer-interface';

@Component({
  selector: 'main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

  column1: ILink[] = [
    {
      label: 'Domande frequenti',
      url: '#'
    },
    {
      label: 'Preferenze per i cookie',
      url: '#'
    }
  ];

  column2: ILink[] = [
    {
      label: 'Centro assistenza',
      url: '#'
    },
    {
      label: "Informazioni sull'assistenza",
      url: '#'
    }
  ];

  column3: ILink[] = [
    {
      label: 'Condizioni di utilizzo',
      url: '#'
    }
  ];

  column4: ILink[] = [
    {
      label: 'Privacy',
      url: '#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
