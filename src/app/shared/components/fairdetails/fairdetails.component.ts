import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../model/ifair';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {


  @Input() fairdetail !: Ifair;

  constructor() { }

  ngOnInit(): void {

   
  }


}
