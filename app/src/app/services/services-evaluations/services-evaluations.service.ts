import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evaluation } from 'src/app/core/models/evaluation';

const API_URL = '/api/services';

@Injectable({
  providedIn: 'root',
})
export class EvaluationsService {
  constructor(private http: HttpClient) {}

  getEvaluations() {
    return this.http.get<Evaluation[]>(API_URL);
  }

  getEvaluation(id: number) {
    return this.http.get<Evaluation>(API_URL + '/' + id);
  }

  addEvaluation(evaluation: Evaluation) {
    return this.http.post<Evaluation>(API_URL, evaluation);
  }

  updateEvaluation(evaluation: Evaluation) {
    return this.http.put<Evaluation>(API_URL + '/' + evaluation.id, evaluation);
  }

  deleteEvaluation(evaluation: Evaluation) {
    return this.http.delete<Evaluation>(API_URL + '/' + evaluation.id);
  }
}
