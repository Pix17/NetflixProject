import { Component, OnInit } from '@angular/core';
import { ILink } from '@models/footer-interface';

@Component({
  selector: 'main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {

  column1: ILink[] = [
    {
      label: 'Domande frequenti',
      url: '#'
    },
    {
      label: 'Rapporti con gli investitori',
      url: '#'
    },
    {
      label: 'Come guardare Netflix',
      url: '#'
    },
    {
      label: `Informazioni sull'azienda`,
      url: '#'
    },
    {
      label: 'Solo su Netflix',
      url: '#'
    }
  ];

  column2: ILink[] = [
    {
      label: 'Centro assistenza',
      url: '#'
    },
    {
      label: 'Opportunità di lavoro',
      url: '#'
    },
    {
      label: 'Condizioni di utilizzo',
      url: '#'
    },
    {
      label: `Contattaci`,
      url: '#'
    }
  ];

  column3: ILink[] = [
    {
      label: 'Account',
      url: '#'
    },
    {
      label: 'Riscatta carte regalo',
      url: '#'
    },
    {
      label: 'Privacy',
      url: '#'
    },
    {
      label: `Test di velocità`,
      url: '#'
    }
  ];

  column4: ILink[] = [
    {
      label: 'Media Center',
      url: '#'
    },
    {
      label: 'Acquista carte regalo',
      url: '#'
    },
    {
      label: 'Preferenze per i cookie',
      url: '#'
    },
    {
      label: `Note legali`,
      url: '#'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
