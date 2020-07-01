import { Component, OnInit } from '@angular/core';
import { Service } from '../../core/models/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  services: Service[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.services = this.activatedRoute.snapshot.data['services'];
    });
  }

  addService() {
    this.router.navigate(['services', 'add'])
  }

  viewService(service: Service) {
    this.router.navigate(['services', 'view', service.id]);
  }
}
