import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterViewInit,
                          AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
  interval:any;

  constructor(){
    console.log("Constructor Running");
  }
  
  ngOnInit(): void {
    console.log("ngOnInit running");
    this.interval=setInterval(()=>{
      console.log("Count");
    },5000)
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy running");
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges running");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck running");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit running");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked running");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit running");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked running");
  }
  

}
