import { TestBed } from '@angular/core/testing';
import { MachineDetailComponent } from './machine-detail.component';

describe('MachineDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineDetailComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MachineDetailComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
