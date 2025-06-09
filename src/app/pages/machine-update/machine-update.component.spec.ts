import { TestBed } from '@angular/core/testing';
import { MachineUpdateComponent } from './machine-update.component';

describe('MachineUpdateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineUpdateComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MachineUpdateComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
