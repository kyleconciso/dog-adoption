import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog.model';
import { Adoption } from '../models/adoption.model';
import { DogService } from '../services/dog.service';
import { AdoptionService } from '../services/adoption.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class UserComponent implements OnInit {
  dogs: Dog[] = [];
  adoptionRequest: Adoption = { id: 0, adopterName: '', adopterContact: '', message: '', dogId: 0}; // Initialize
  selectedDog: Dog | null = null;  // To hold the selected dog for adoption


  constructor(private dogService: DogService, private adoptionService: AdoptionService) { }

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getAllDogs().subscribe({
      next: (dogs) => {
          this.dogs = dogs.filter(dog => !dog.isAdopted); //Only show dogs not yet adopted
      },
      error: (error) => {
        console.error('Error fetching dogs:', error);
      }
    });
  }


  selectDog(dog: Dog) {
    this.selectedDog = dog;
    this.adoptionRequest.dogId = dog.id; // Set the dogId in the adoption request
  }

  submitAdoption(): void {
    if(this.selectedDog) { //Make sure a dog is actually selected
      this.adoptionService.submitAdoption(this.adoptionRequest).subscribe({
        next: (adoption) => {
          console.log('Adoption request submitted:', adoption);
          // Reset the form (or optionally, redirect to a thank you page, etc.)
          this.adoptionRequest = { id: 0, adopterName: '', adopterContact: '', message: '', dogId: 0 };
          this.selectedDog = null;
          alert('Your request has been successfully submitted!');
        },
        error: (error) => {
          console.error('Error submitting adoption request:', error);
          alert('There was an error submitting the request, please try again.'); //Show alert to user
        }

      });

    } else {
        alert("Please select a dog first!");
    }

  }

}