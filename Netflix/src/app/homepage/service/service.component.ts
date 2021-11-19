import { Component, OnInit } from '@angular/core';
import { IService } from '@models/interfaces';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  services:IService[] = [
    {
      title: 'Goditi Netflix sulla tua TV.',
      description: 'Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.',
      media: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
      video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v',
    },
    {
      title: 'Scarica le tue serie da guardare offline.',
      description: 'Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.',
      media: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    },
    {
      title: 'Guarda Netflix ovunque.',
      description: 'Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.',
      media: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
      video: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v',
    },
    {
      title: 'Crea profili per i bambini.',
      description: 'I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.',
      media: 'https://occ-0-3968-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbh8I7sjWYNz2f8_bqyLdqQqR5AfT7VDHCKvURfq4-D-a7r0fnLYR01-_teQH4fX1NctSxg5EVZ_cX0tjuzKbmdUvLab.png?r=dda',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
