import { Component, OnInit } from '@angular/core';
import { fairsArr } from '../../const/fair';
import { Ifair } from '../../model/ifair';

@Component({
  selector: 'app-fairdashboard',
  templateUrl: './fairdashboard.component.html',
  styleUrls: ['./fairdashboard.component.scss']
})
export class FairdashboardComponent implements OnInit {

  fairsArray : Array<Ifair> = fairsArr;

  selectedfair !: Ifair;

  constructor() { }

  ngOnInit(): void {
    this.selectedfair = fairsArr[0];
  }

  

}
