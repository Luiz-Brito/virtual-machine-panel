import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { VirtualMachineService } from '../../services/virtual-machine-service.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-machine-create',
  imports: [MatCardModule, CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './machine-create.component.html',
  styleUrl: './machine-create.component.scss'
})
export class MachineCreateComponent implements OnInit {

  protected form!: FormGroup;
  nameError: boolean = false;
  memoryError: boolean = false;
  cpuError: boolean = false;
  discError: boolean = false;

  constructor(private virtualMachineService: VirtualMachineService, private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
  }

    private initForm(): void {
    this.form = (
      this.formBuilder.group({
        name: ['', [ Validators.required, Validators.minLength(5)]],
        cpu: [null, [ Validators.required, Validators.min(1)]],
        memory: [null, [ Validators.required, Validators.min(1)]],
        disc: [null, [ Validators.required, Validators.min(1)]],
      })
    );
  }

  protected onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.create();
    }
  }

  protected create(): void { 
      const {
      name,
      cpu,
      memory,
      disc,
    } = this.form.value;
    
    this.virtualMachineService.createVirtualMachine({
      name,
      cpu,
      memory,
      disc
    }).subscribe(() => {
      this.virtualMachineService.showMessage('Virtual machine created!')
      this.router.navigate(['/machines'])
    })
  }

  protected cancel(): void {
    this.router.navigate(['/machines'])
  }
}
