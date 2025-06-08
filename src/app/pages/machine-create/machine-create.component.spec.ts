import { TestBed } from '@angular/core/testing';
import { MachineCreateComponent } from './machine-create.component';

describe('MachineCreateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineCreateComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MachineCreateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
