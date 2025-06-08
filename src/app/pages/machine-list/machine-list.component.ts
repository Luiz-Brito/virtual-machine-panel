import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { VirtualMachineService } from '../../services/virtual-machine-service.service';
import { Router } from '@angular/router';
import { TABLE_HEADER } from '../../constants/constants';
import { VirtualMachine } from '../../models/virtualMachine.model';
import { CustomDateFormatPipe } from '../../pipes/custom-date-format.pipe';
import { DialogBoxComponent } from '../../components/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-machine-list',
  imports: [MatCardModule, CommonModule, MatTableModule, MatButtonModule, CustomDateFormatPipe, MatTooltip],
  templateUrl: './machine-list.component.html',
  styleUrl: './machine-list.component.scss'
})
export class MachineListComponent implements OnInit {

  VirtualMachineData: VirtualMachine[] = []
  displayedColumns = TABLE_HEADER;

  readonly dialog = inject(MatDialog);

  constructor(private virtualMachineService: VirtualMachineService, private router: Router) { }

    ngOnInit(): void {
      this.getVirtualMachine();
  }

  protected getVirtualMachine() {
      this.virtualMachineService.getVirtualMachines().subscribe(VirtualMachineData => {
      this.VirtualMachineData = VirtualMachineData
    })
  }

  private deleteVirtualMachine(id: number) {
      this.virtualMachineService.deleteVirtualMachine(id).subscribe()
  }

    navigateToProductCreate(): void {
    this.router.navigate(['/machines/create'])
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogBoxComponent);

    dialogRef.afterClosed().subscribe((result: any) => { 
      if(result === "delete") {
        this.deleteVirtualMachine(id)
        this.virtualMachineService.showMessage('Virtual machine deleted successfully!')
      }
    })
  }
}
