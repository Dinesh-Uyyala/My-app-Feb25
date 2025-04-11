import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // Test 1: Initial Values Test
   it('should have initial values of num1, num2, and sum as 0', () => {
    const component = fixture.componentInstance;
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.sum).toBe(0);
  });

  // Test 2: Addition Calculation Test
  it('should calculate the correct sum when calculate() is called', () => {
    const component = fixture.componentInstance;
    component.num1 = 5;
    component.num2 = 3;
    component.calculate();
    expect(component.sum).toBe(8);
  });

  // Test 3: Check if calculate() method is called
  it('should call calculate() when the button is clicked', () => {
    const component = fixture.componentInstance;
    spyOn(component, 'calculate');  // Create a spy on the calculate function
    let button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.calculate).toHaveBeenCalled();
  });

  // Test 4: User Input Binding Test
  it('should bind the values of num1 and num2 to input fields', () => {
    const component = fixture.componentInstance;
    component.num1 = 10;
    component.num2 = 5;
    fixture.detectChanges();  // Trigger change detection
    const input1 = fixture.nativeElement.querySelector('input[type="number"]:nth-child(1)');
    const input2 = fixture.nativeElement.querySelector('input[type="number"]:nth-child(2)');
    expect(input1.value).toBe('10');
    expect(input2.value).toBe('5');
  });

  // Test 5: Correct Display of Sum After Calculation
  it('should display the correct sum after calculation', () => {
    const component = fixture.componentInstance;
    component.num1 = 4;
    component.num2 = 6;
    component.calculate();
    fixture.detectChanges();  // Trigger change detection to update the view
    const sumDisplay = fixture.nativeElement.querySelector('h3');
    expect(sumDisplay.textContent).toBe('10');
  });

  // Test 6: Edge Case - Negative Numbers
  it('should correctly calculate the sum with negative numbers', () => {
    const component = fixture.componentInstance;
    component.num1 = -5;
    component.num2 = -3;
    component.calculate();
    expect(component.sum).toBe(-8);
  });

  // Test 7: Edge Case - Zero Values
  it('should correctly calculate the sum when both numbers are zero', () => {
    const component = fixture.componentInstance;
    component.num1 = 0;
    component.num2 = 0;
    component.calculate();
    expect(component.sum).toBe(0);
  });
});
