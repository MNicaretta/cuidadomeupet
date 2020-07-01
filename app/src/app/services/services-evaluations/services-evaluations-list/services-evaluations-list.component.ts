import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/core/models/evaluation';

@Component({
  selector: 'app-services-evaluations-list',
  templateUrl: './services-evaluations-list.component.html',
  styleUrls: ['./services-evaluations-list.component.scss']
})
export class ServicesEvaluationsListComponent implements OnInit {

  evaluations: Evaluation[];

  constructor() { }

  ngOnInit(): void {
    this.evaluations = [
      {
        commentaries: "teste comentario",
        grade: 4,
        orderId: 1
      },
      {
        commentaries: "teste comentario",
        grade: 0,
        orderId: 1
      },
      {
        commentaries: "teste comentario",
        grade: 5,
        orderId: 1
      },
      {
        commentaries: "teste comentario",
        grade: 3,
        orderId: 1
      },
      {
        commentaries: "teste comentario",
        grade: 2,
        orderId: 1
      }
    ]
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
