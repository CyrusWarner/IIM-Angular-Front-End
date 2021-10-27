import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogActivityService } from 'src/app/services/log-activity-service/log-activity.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LogActivityComponent } from './log-activity.component';

describe('LogActivityComponent', () => {
  let component: LogActivityComponent;
  let fixture: ComponentFixture<LogActivityComponent>;
  let mockLogActivityService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ LogActivityComponent ],
      providers: [{provide: LogActivityService, useValue: mockLogActivityService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
