import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Service } from '../service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {

  servicesForm: FormGroup;

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private servicesService: ServicesService,
    private router: Router,
    private calendar: NgbCalendar

  ) { }

  ngOnInit(): void {
    this.servicesForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      additionalInfo: [
        ''
      ]
    });

    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

  }

  save(): void {
    const service = { ...this.servicesForm.value, userId: 2 } as Service;

    this.servicesService
      .addService(service)
      .subscribe(
        (value) => this.router.navigate(['services']),
        err => console.error(err)
      );
  }

  cancel(): void {
    this.router.navigate(['services']);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
