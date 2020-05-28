import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  pets: Service[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pets = this.activatedRoute.snapshot.data['services'];
    });
  }


}
