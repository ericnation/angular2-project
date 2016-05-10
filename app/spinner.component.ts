import {Component, Input} from "angular2/core";

@Component({
  selector: 'spinner',
  template: `
    <div class="loader-wrapper" *ngIf="visible">
      <span class="loader">
        <i class="fa fa-spin fa-spinner fa-3x"></i>
      </span>
    </div>
  `
})

export class SpinnerComponent {
  
  constructor(){}

  @Input() visible = true;
}