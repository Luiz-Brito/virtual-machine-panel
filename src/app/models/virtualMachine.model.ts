export interface VirtualMachine {
  id: number;
  name: string;
  cpu: number;
  memory: number;
  disc: number;
  status: string;
  createdAt: string;
}

export interface VirtualMachineParams {
  name: string;
  cpu: number;
  memory: number;
  disc: number;
}

export interface VirtualMachineUpdateParams {
  name: string;
  cpu: number;
  memory: number;
  disc: number;
  status: string;
}