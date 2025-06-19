import { Component, inject, OnInit } from '@angular/core';
import { SlotService } from '../../../services/slot.service';

@Component({
  selector: 'app-numeri',
  templateUrl: './numeri.component.html',
  styleUrl: './numeri.component.css'
})
export class NumeriComponent implements OnInit {
  risultati: string[] = [];

  constructor(private slotService: SlotService) {}

  ngOnInit(): void {
    this.slotService.slotResultSubject.subscribe(data => {
        this.risultati = data;
      });
    };
}


