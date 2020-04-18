import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formerror',
  templateUrl: './formerror.component.html',
  styleUrls: ['./formerror.component.scss']
})
export class FormerrorComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
