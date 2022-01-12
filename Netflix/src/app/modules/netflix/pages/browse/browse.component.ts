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

  popular: any;
  preferred: any;
  tvSeries: any;

  constructor(private readonly api: ApiCallService) {}

  ngOnInit(): void {
    this.user = JSON.parse('' + localStorage.getItem('user'));
    this.account = JSON.parse('' + localStorage.getItem('account'));

    // this.api
    //   .getApi(type.movie, listedBy.popular)
    //   .subscribe((response) => (this.popular = response.results));

    // this.api
    //   .getApi(type.movie, listedBy.top_rated)
    //   .subscribe((response) => (this.preferred = response.results));

      // this.api
      // .getApi(type.tv, listedBy.popular)
      // .subscribe((response) => (this.tvSeries = response.results));

      this.api.getApiFiga().subscribe((response) => {
        this.popular = response.popular.results
        this.preferred = response.preferred.results
        this.tvSeries = response.tvSeries.results
      });
      
  }
  

}
