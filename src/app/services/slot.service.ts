import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

   slotResultSubject = new BehaviorSubject<string[]>([]);

   generaSlot(tipo: 'numeri' | 'lettere') {
     if (tipo === 'numeri') {
       const numeri = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10).toString());
       this.slotResultSubject.next(numeri); 
     } else {
       const lettere = Array.from({ length: 3 }, () => {
         const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         return chars[Math.floor(Math.random() * chars.length)];
       });
       this.slotResultSubject.next(lettere);
     }
   }
}
