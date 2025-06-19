import { Component, OnInit } from '@angular/core';
import { SlotService } from '../../../services/slot.service';

@Component({
  selector: 'app-lettere',
  templateUrl: './lettere.component.html',
  styleUrl: './lettere.component.css'
})
export class LettereComponent implements OnInit {
  risultati: string[] = [];
  
    constructor(private slotService: SlotService) {}
  
    ngOnInit(): void {
      this.slotService.slotResultSubject.subscribe(data => {
          this.risultati = data;
      });
    }

}
