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
  firstSubmitted: boolean = false;
  selectedNiveau!: string;
  selectedContrat: string = '';
  Niveau!:string;
  savedCandidate = {
    completename: '',
    email: '',
    niveau: '',
    contrat: '',
    disponibilite: false,
    bio: ''
  }

  // level!:String;
  accepted!:boolean;
  immediat!:boolean;
  pitchPersonnel:string = '';
  options = [
    {id:1, label:'CDI'},
    {id:2,label:'freelance'}
  ]

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.savedCandidate = {
        completename: this.user.completename,
        email: this.user.email,
        niveau: this.Niveau,
        contrat: this.selectedContrat,
        disponibilite: this.immediat,
        bio: this.pitchPersonnel
      };
      this.firstSubmitted = true;
      console.log('Niveau sélectionné:', this.savedCandidate);
      alert('Données soumises avec succès ! (Voir console)');
      this.resetForm(form);
    } else {
      console.log('Formulaire invalide');
    }
  }
  resetForm(form: NgForm) {
    form.resetForm();
    this.user = {
      completename: '',
      email: '',
      niveau: ''
    };
    this.selectedNiveau = '';
    this.selectedContrat = '';
    this.Niveau = '';
    this.immediat = false;
    this.pitchPersonnel = '';
  }


}