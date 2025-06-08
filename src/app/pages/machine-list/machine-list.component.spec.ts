import { TestBed } from '@angular/core/testing';
import { MachineListComponent } from './machine-list.component';

describe('MachineListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MachineListComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
