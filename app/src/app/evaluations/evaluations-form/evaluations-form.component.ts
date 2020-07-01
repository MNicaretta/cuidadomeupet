import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Order } from 'src/app/core/models/order';
import { EvaluationsService } from '../evaluations.service';

@Component({
  selector: 'app-evaluations-form',
  templateUrl: './evaluations-form.component.html',
  styleUrls: ['./evaluations-form.component.scss'],
})
export class EvaluationsFormComponent implements OnInit {
  @Input() order: Order;
  @Output() onFinish: EventEmitter<boolean> = new EventEmitter<boolean>();

  evaluationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private evaluationsService: EvaluationsService
  ) {}

  ngOnInit(): void {
    this.evaluationForm = this.formBuilder.group({
      grade: [null, [Validators.required]],
      commentaries: [''],
    });
  }

  addEvaluation(sendEvaluation: boolean) {
    if (sendEvaluation) {
      this.evaluationsService
        .addEvaluation({ ...this.evaluationForm.value, orderId: this.order.id })
        .subscribe(
          () => this.onFinish.emit(true),
          err => { console.error(err); alert('Ocorreu um erro'); }
        );
    } else {
      this.onFinish.emit(true);
    }
  }

  cancel() {
    this.onFinish.emit(false);
  }
}
