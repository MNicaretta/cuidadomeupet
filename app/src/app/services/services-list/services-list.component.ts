import { Component, OnInit } from '@angular/core';
import { ServiceWrapper } from '../../core/models/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {

  list: ServiceWrapper[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.list = this.activatedRoute.snapshot.data['services'];
    });
  }

  addService() {
    this.router.navigate(['services', 'add'])
  }

  viewService(wrapper: ServiceWrapper) {
    this.router.navigate(['services', 'view', wrapper.service.id]);
  }
}
