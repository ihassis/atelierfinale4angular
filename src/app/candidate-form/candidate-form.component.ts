import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { JsonPipe} from '@angular/common';
@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {
  user = {
    completename:'',
    email: '',
    niveau: ''
  };
  selectedNiveau!: string;
  Niveau!:String;
  get level(): string {
    return this.options
      .filter(opt => opt.checked)
      .map(opt => opt.label)
      .join(', ');
  }
  // level!:String;
  accepted!:boolean;
  immediat!:boolean;
  pitchPersonnel:String = '';
  options = [
    {id:1, label:'CDI', checked:false},
    {id:2,label:'freelance',checked:false}
  ]

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Niveau sélectionné:', this.selectedNiveau);
      console.log('Contrats sélectionnés:', this.level);
      console.log('Formulaire soumis ! Données :', this.user);
      alert('Données soumises avec succès ! (Voir console)');
    } else {
      console.log('Formulaire invalide');
    }
  }

}