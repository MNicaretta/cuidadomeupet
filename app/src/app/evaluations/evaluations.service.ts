import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluation } from '../core/models/evaluation';

const API_URL = "/api/evaluations";

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService {

  constructor(private http: HttpClient) { }

  addEvaluation(evaluation: Evaluation) {
    return this.http.post<Evaluation>(API_URL, evaluation);
  }

  getEvaluations(serviceId: number) {
    return this.http.get<Evaluation[]>(API_URL + "/" + serviceId);
  }
}
