import { Component, OnInit } from '@angular/core';
import {Service1Service} from '../service1.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service:Service1Service) { }

  ngOnInit(): void {
  }
  hist=this.service.hist;

}
