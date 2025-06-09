import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VirtualMachineService } from '../../services/virtual-machine-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-machine-update',
  imports: [MatCardModule, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './machine-update.component.html',
  styleUrl: './machine-update.component.scss'
})
export class MachineUpdateComponent implements OnInit {

  protected form!: FormGroup;
  nameError: boolean = false;
  memoryError: boolean = false;
  cpuError: boolean = false;
  discError: boolean = false;
  private machineId = 0;
  protected statusOptions = [
    { value: 'START', label: 'START' },
    { value: 'STOP', label: 'STOP' },
    { value: 'SUSPEND', label: 'SUSPEND' },
  ]

  constructor(private virtualMachineService: VirtualMachineService, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getVirtualMachine();
    this.initForm();
  }

    private initForm(): void {
    this.form = (
      this.formBuilder.group({
        name: ['', [ Validators.required, Validators.minLength(5)]],
        cpu: [null, [ Validators.required, Validators.min(1)]],
        memory: [null, [ Validators.required, Validators.min(1)]],
        disc: [null, [ Validators.required, Validators.min(1)]],
        status:['']
      })
    );
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.update();
    }
  }

  protected getVirtualMachine() {
      this.machineId = Number(this.route.snapshot.paramMap.get('id'));
      
      this.virtualMachineService.getVirtualMachineById(this.machineId).subscribe(item => {
        this.form.patchValue({
          name: item.name,
          cpu: item.cpu,
          memory: item.memory,
          disc: item.disc,
          status: item.status
        });
    });
  }

  protected update(): void { 
      const {
      name,
      cpu,
      memory,
      disc,
      status
    } = this.form.value;    
    
    this.virtualMachineService.updateVirtualMachineById(this.machineId, {
      name,
      cpu,
      memory,
      disc,
      status
    }).subscribe(() => {
      this.virtualMachineService.showMessage('Virtual machine updated!')
      this.router.navigate(['/machines'])
    })
  }

  protected cancel(): void {
    this.router.navigate(['/machines'])
  }
}
