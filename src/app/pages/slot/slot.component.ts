import { Component } from '@angular/core';
import { SlotService } from '../../services/slot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrl: './slot.component.css'
})
export class SlotComponent {

  scelta: 'numeri' | 'lettere' = 'numeri';

  constructor(private slotService: SlotService, private router: Router) { }

  genera() {
    this.slotService.generaSlot(this.scelta); 
    this.router.navigate([`slot/${this.scelta}`]);
  }
}
