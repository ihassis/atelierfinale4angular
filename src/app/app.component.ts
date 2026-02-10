import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CandidateFormComponent } from "./candidate-form/candidate-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CandidateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
