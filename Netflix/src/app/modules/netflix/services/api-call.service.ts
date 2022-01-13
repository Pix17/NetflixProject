import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listedBy, type } from '@models/interfaces';
import { forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private readonly http: HttpClient) {}

  getApi(type: type, listedBy: listedBy) {
    const params = new HttpParams().set('api_key', environment.apiKey);
    return this.http.get<any>(`${environment.api}${type}${listedBy}`, {
      params,
    });
  }

  getApiFiga() {
    return forkJoin({
      popularMovie: this.getApi(type.movie, listedBy.popular),
      topRatedMovie: this.getApi(type.movie, listedBy.top_rated),
      upComingMovie: this.getApi(type.movie, listedBy.upcoming),

      popularSeries: this.getApi(type.tv, listedBy.popular),
      topRatedSeries: this.getApi(type.tv, listedBy.top_rated),
      onAirSeries: this.getApi(type.tv, listedBy.on_the_air),
    });
  }
}
