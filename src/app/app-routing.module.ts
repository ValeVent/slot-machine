import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlotComponent } from './pages/slot/slot.component';
import { NumeriComponent } from './pages/slot/numeri/numeri.component';
import { LettereComponent } from './pages/slot/lettere/lettere.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'slot', 
    pathMatch: 'full' 
  },
  { 
    path: 'slot', 
    component: SlotComponent,
    children: [
      {
        path: '',
        redirectTo: 'numeri',
        pathMatch: 'full'
      },
      {
        path: 'numeri',
        component: NumeriComponent
      },
      {
        path: 'lettere',
        component: LettereComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
