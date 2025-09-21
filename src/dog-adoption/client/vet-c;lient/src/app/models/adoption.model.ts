export interface Adoption {
    id: number;
    adopterName: string;
    adopterContact: string;
    message: string;
    dogId: number;  // dogId is no longer optional, enforce the relationship
  }