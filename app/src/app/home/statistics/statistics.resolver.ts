import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StatisticsCategory } from 'src/app/core/models/statistics-category';
import { StatisticsService } from './statistics.service';

@Injectable({ providedIn: 'root' })
export class StatisticsResolver implements Resolve<Observable<StatisticsCategory[]>> {

  constructor(private statisticsService: StatisticsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StatisticsCategory[]> {
    return this.statisticsService.getSpeciesStatistics();
  }
}
