import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MachineListComponent } from './pages/machine-list/machine-list.component';
import { MachineCreateComponent } from './pages/machine-create/machine-create.component';
import { MachineUpdateComponent } from './pages/machine-update/machine-update.component';
import { MachineDetailComponent } from './pages/machine-detail/machine-detail.component';

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
},
{
  path: "machines/update/:id",
  component: MachineUpdateComponent
},
{
  path: "machines/detail/:id",
  component: MachineDetailComponent
}
];
