import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../model/ifair';

@Component({
  selector: 'app-faircard',
  templateUrl: './faircard.component.html',
  styleUrls: ['./faircard.component.scss']
})
export class FaircardComponent implements OnInit {

  @Input() getfair !: Ifair;
   


  constructor() { }

  ngOnInit(): void {
    let card = Array.from(document.getElementsByClassName('card'));
    card[0].classList.add('active')
  }

  setstyle(eve : HTMLDivElement){
    let card = Array.from(document.getElementsByClassName('card'));
    card.map(ele => {
      ele.classList.remove('active')
    })
    
    eve.classList.add('active')
  }


}
