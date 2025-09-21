import { Component, OnInit } from '@angular/core';
import { Dog } from '../models/dog.model';
import { DogService } from '../services/dog.service';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { AdoptionService } from '../services/adoption.service';
import { Adoption } from '../models/adoption.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AdminComponent implements OnInit {
  dogs: Dog[] = [];
  newDog: Dog = { id: 0, name: '', breed: '', age: 0, isAdopted: false, imageUrl: '' };
  editDog: Dog | null = null; 
  adoptions: Adoption[] = [];

  constructor(private dogService: DogService, private adoptionService: AdoptionService) { } 

  ngOnInit(): void {
      this.loadDogs();
      this.loadAdoptionRequests();
  }

  loadDogs(): void {
    this.dogService.getAllDogs().subscribe({
      next: (dogs) => {
        this.dogs = dogs;
      },
      error: (error) => {
        console.error('Error fetching dogs:', error);
      }
    });
  }


  addDog(): void {
      this.dogService.addDog(this.newDog).subscribe({
          next: (addedDog) => {
              this.dogs.push(addedDog);
              this.newDog = { id: 0, name: '', breed: '', age: 0, isAdopted: false, imageUrl: '' }; 
          },
          error: (error) => {
              console.error('Error adding dog:', error);
          }
      });
  }



  edit(dog: Dog) {
    this.editDog = { ...dog };
    setTimeout(() => { 
        document.getElementById('edit-dog-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }


  updateDog() {
      if (this.editDog) {
          this.dogService.updateDog(this.editDog.id, this.editDog).subscribe({
              next: (updatedDog) => {
                  const index = this.dogs.findIndex(d => d.id === updatedDog.id);
                  if (index !== -1) {
                      this.dogs[index] = updatedDog;
                  }

                  this.editDog = null; 
              },
              error: (error) => {
                  console.error('Error updating dog:', error);
              }
          });
      }
  }



  deleteDog(id: number): void {
    if (confirm('Are you sure you want to delete this dog?')) {
      this.dogService.deleteDog(id).subscribe({
        next: () => {
          this.dogs = this.dogs.filter(dog => dog.id !== id);
        },
        error: (error) => {
          console.error('Error deleting dog:', error);
        }
      });
    }
  }

  loadAdoptionRequests() {
    this.adoptionService.getAllAdoptions().subscribe({
        next: (adoptions) => {
            this.adoptions = adoptions;
        },
        error: (error) => {
            console.error('Error fetching adoption requests:', error);
        }
    });
}

deleteAdoptionRequest(id: number): void {
  if (confirm('Are you sure you want to delete this adoption request?')) {
    this.adoptionService.deleteAdoption(id).subscribe({ 
      next: () => {
        this.adoptions = this.adoptions.filter(adoption => adoption.id !== id);
      },
      error: (error) => {
        console.error('Error deleting adoption request:', error);
      }
    });
  }
}

}