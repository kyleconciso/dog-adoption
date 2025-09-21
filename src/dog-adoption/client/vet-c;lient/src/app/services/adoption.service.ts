import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from '../models/adoption.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {
  private apiUrl = 'http://localhost:18080/api/adoptions';

  constructor(private http: HttpClient) { }

  submitAdoption(adoption: Adoption): Observable<Adoption> {
    return this.http.post<Adoption>(this.apiUrl, adoption);
  }

  getAllAdoptions(): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(this.apiUrl);
  }

  getAdoptionById(id: number): Observable<Adoption> {
    return this.http.get<Adoption>(`${this.apiUrl}/${id}`);
  }

  deleteAdoption(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}