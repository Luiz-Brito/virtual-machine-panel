import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MachineListComponent } from './pages/machine-list/machine-list.component';

export const routes: Routes = [{
  path: "",
  component: HomeComponent
}, 
{
  path: "machines",
  component: MachineListComponent
}
];
