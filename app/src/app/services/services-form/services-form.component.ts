import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { Service } from '../../core/models/service';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Species } from 'src/app/core/models/species';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {

  hoveredDate: NgbDate | null = null;

  price: number;

  additionalInfo: string;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  selectedSpecies: Species[] = [];

  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private calendar: NgbCalendar

  ) { }

  ngOnInit(): void {

    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

  }

  save(): void {
    const service: Service = {
      price: this.price,
      state: "ACTIVE",
      type: "HOSTING",
      additionalInfo: this.additionalInfo,
      startDate: new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day),
      endDate: new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day),
      userId: 1,
      species: this.selectedSpecies
    };

    this.servicesService
      .addService(service)
      .subscribe(
        () => this.router.navigate(['services']),
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
