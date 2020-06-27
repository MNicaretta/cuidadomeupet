import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatisticsCategory } from 'src/app/core/models/statistics-category';

const API_URL = '/api/statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getSpeciesStatistics() {
    return this.http.get<StatisticsCategory[]>(API_URL + '/species');
  }
}
