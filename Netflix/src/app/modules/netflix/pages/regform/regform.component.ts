import { Component, OnInit } from '@angular/core';
import { ILink } from '@models/footer-interface';

@Component({
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {

  constructor() { }

  column1: ILink[] = [
    {
      label: 'Domande frequenti',
      url: '#'
    },
    {
      label: 'Preferenze per i cookie',
      url: '#'
    },
  ];

  column2: ILink[] = [
    {
      label: 'Centro assistenza',
      url: '#'
    },
    {
      label: "Informazioni sull'azienda",
      url: '#'
    },
  ];

  column3: ILink[] = [
    {
      label: 'Condizioni di utilizzo',
      url: '#'
    },
  ];

  column4: ILink[] = [
    {
      label: 'Privacy',
      url: '#'
    },

  ]
  

  ngOnInit(): void {
  }

}
