import { environment } from 'src/environments/environment';
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { IAccount, IUser, listedBy, type } from '@models/interfaces';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  user!: IUser;
  account!: IAccount;

  faPlay = faPlay;
  faInfo = faInfo;

  popularMovie: any;
  preferredMovie: any;
  popularSeries: any;
  latestMovie: any;
  upComingMovie: any;
  topRatedSeries: any;
  latestSeries: any;
  onAirSeries: any;

  environment = environment;

  constructor(private readonly api: ApiCallService) {}

  ngOnInit(): void {
    this.user = JSON.parse('' + localStorage.getItem('user'));
    this.account = JSON.parse('' + localStorage.getItem('accountChosen'));

    this.api.getApiFiga().subscribe((response) => {
      this.popularMovie = response.popularMovie.results;
      this.preferredMovie = response.topRatedMovie.results;
      this.upComingMovie = response.upComingMovie.results;

      this.topRatedSeries = response.topRatedSeries.results;
      this.onAirSeries = response.onAirSeries.results;
      this.popularSeries = response.popularSeries.results;
    });
  }
}
