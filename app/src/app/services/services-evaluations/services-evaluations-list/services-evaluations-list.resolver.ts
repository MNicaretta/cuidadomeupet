import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Evaluation } from 'src/app/core/models/evaluation';
import { EvaluationsService } from '../services-evaluations.service';


@Injectable({ providedIn: 'root' })
export class ServicesListResolver implements Resolve<Observable<Evaluation[]>> {

  constructor(private evaluationService: EvaluationsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evaluation[]> {
    return this.evaluationService.getEvaluations();
  }
}
