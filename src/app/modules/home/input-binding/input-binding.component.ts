import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  standalone: true,
  imports: [],
  templateUrl: './input-binding.component.html',
  styleUrl: './input-binding.component.scss'
})
export class InputBindingComponent {
  @Input('number') number!:string;
}
