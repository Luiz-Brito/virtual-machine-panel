import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { VirtualMachineService } from '../../services/virtual-machine-service.service';
import { Router } from '@angular/router';
import { TABLE_HEADER } from '../../constants/constants';
import { VirtualMachine } from '../../models/virtualMachine.model';

@Component({
  selector: 'app-machine-list',
  imports: [MatCardModule, CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss'
})
export class MachineListComponent implements OnInit {

  VirtualMachineData: VirtualMachine[] = []
  displayedColumns = TABLE_HEADER;


  constructor(private virtualMachineService: VirtualMachineService, private router: Router) { }

    ngOnInit(): void {
      this.getVirtualMachine();
  }

  private getVirtualMachine() {
      this.virtualMachineService.getVirtualMachines().subscribe(VirtualMachineData => {
      this.VirtualMachineData = VirtualMachineData
    })
  }

    navigateToProductCreate(): void {
    this.router.navigate(['/machines/create'])
  }
}
