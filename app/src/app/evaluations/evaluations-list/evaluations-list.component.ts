import { Component, OnInit, Input } from '@angular/core';

import { Evaluation } from 'src/app/core/models/evaluation';
import { Service } from 'src/app/core/models/service';
import { EvaluationsService } from '../evaluations.service';

@Component({
  selector: 'app-evaluations-list',
  templateUrl: './evaluations-list.component.html',
  styleUrls: ['./evaluations-list.component.scss']
})
export class EvaluationsListComponent implements OnInit {

  @Input() service: Service;

  evaluations: Evaluation[];

  constructor(private evaluationsService: EvaluationsService) { }

  ngOnInit(): void {
    this.evaluationsService
      .getEvaluations(this.service.id)
      .subscribe(list => this.evaluations = list);
  }

  getTitle() {
    if (this.evaluations?.length) {
      const label = this.evaluations.length > 1 ? 'Avaliações' : 'Avaliação';

      return `${this.evaluations.length} ${label}`;
    } else {
      return 'Nenhum Avaliação'
    }
  }

  getGradeString(grade: number){
    let result = "";
    for (let index = 0; index < 5; index++) {
      if( index < grade ){
        result += " ★ ";
      }else{
        result += " ☆ ";
      }
    }
    return result;
  }
}
