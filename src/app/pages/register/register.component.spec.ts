import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountService } from 'src/app/services/account-service/account.service';
import { RegisterComponent } from './register.component';
import {RouterTestingModule} from '@angular/router/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let mockAccountService;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RegisterComponent ],
      providers: [{provide: AccountService, useValue: mockAccountService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
