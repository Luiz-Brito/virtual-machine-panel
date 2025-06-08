import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualMachine, VirtualMachineParams } from '../models/virtualMachine.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, map, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  private readonly BASE_URL = "http://localhost:8080/virtual-machine"

    getVirtualMachines() {
      return this.http.get<VirtualMachine[]>(this.BASE_URL).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

    createVirtualMachine(data: VirtualMachineParams): Observable<VirtualMachineParams> {
      return this.http.post<VirtualMachineParams>(this.BASE_URL, data).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      )
  }

    deleteVirtualMachine(id: number) {
      return this.http.delete<number>(`${this.BASE_URL}/${id}`).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      )
  }
  
    showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-erro'] : ['msg-success']
    })
  }

    errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage(e.error.detail, true)
    return EMPTY
  }
}
