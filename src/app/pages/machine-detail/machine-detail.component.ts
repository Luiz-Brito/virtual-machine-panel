import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VirtualMachineService } from '../../services/virtual-machine-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CustomDateFormatPipe } from '../../pipes/custom-date-format.pipe';

@Component({
  selector: 'app-machine-detail',
  imports: [MatCardModule, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CustomDateFormatPipe],
  templateUrl: './machine-detail.component.html',
  styleUrl: './machine-detail.component.scss'
})
export class MachineDetailComponent implements OnInit {

  private machineId = 0;
  virtualMachineData: any;

  constructor(private router: Router, private virtualMachineService: VirtualMachineService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getVirtualMachine();
  }

    protected getVirtualMachine() {
      this.machineId = Number(this.route.snapshot.paramMap.get('id'));
      
      this.virtualMachineService.getVirtualMachineById(this.machineId).subscribe(item => {
        this.virtualMachineData = item;
    });
  }

  protected goBack(): void {
    this.router.navigate(['/machines'])
  }
}
