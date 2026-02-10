import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {
  
  user = {
    completename:'',
    email: '',
    niveau: ''
  };
  level:String = 'junior';
  accepted:boolean = false;
  immediat:boolean = false;
  options = [
    {id:1, label:'CDI', checked:false},
    {id:2,label:'freelance',checked:false}
  ]

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulaire soumis ! Données :', this.user);
      alert('Données soumises avec succès ! (Voir console)');
    } else {
      console.log('Formulaire invalide');
    }
  }

}
