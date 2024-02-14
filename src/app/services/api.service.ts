import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { store } from '../interfaces/server';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  getMovies() {
    const params = {
      api_key: store.apiKey,
      query: store.inputSearch
    }

    try {
      this.http.get(store.apiMovieUrl, {
        params: params
      }).subscribe((data: any) => {
        store.moviesArray = data.results;
      })

    } catch (error) {
      console.log(error);

    }
  }

  getSeries() {
    const params = {
      api_key: store.apiKey,
      query: store.inputSearch
    }

    try {
      this.http.get(store.apiSerieUrl, {
        params: params
      }).subscribe((data: any) => {
        store.seriesArray = data.results;
      })
    } catch (error) {
      console.log(error);
    }
    store.loading = false;
  }


  get() {
    if (store.inputSearch !== "") {
      this.getMovies();
      this.getSeries();
      store.inputSearch = '';
    } else {
      console.log('no');

    }
  }
}
