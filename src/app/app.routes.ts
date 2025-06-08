import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MachineListComponent } from './pages/machine-list/machine-list.component';
import { MachineCreateComponent } from './pages/machine-create/machine-create.component';

export const routes: Routes = [{
  path: "",
  component: HomeComponent
}, 
{
  path: "machines",
  component: MachineListComponent
},
{
  path: "machines/create",
  component: MachineCreateComponent
}
];
