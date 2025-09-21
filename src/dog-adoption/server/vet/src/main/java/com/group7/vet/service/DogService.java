package com.group7.vet.service;

import com.group7.vet.model.Dog;
import com.group7.vet.repository.DogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogService {

    private final DogRepository dogRepository;

    @Autowired
    public DogService(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }

    public Optional<Dog> getDogById(Long id) { return dogRepository.findById(id); } // Added getDogById

    public Dog addDog(Dog dog) {
        return dogRepository.save(dog);
    }

    public Dog updateDog(Long id, Dog updatedDog) {
        return dogRepository.findById(id)
                .map(existingDog -> {
                    existingDog.setName(updatedDog.getName());
                    existingDog.setBreed(updatedDog.getBreed());
                    existingDog.setAge(updatedDog.getAge());
                    existingDog.setIsAdopted(updatedDog.getIsAdopted());
                    existingDog.setImageUrl(updatedDog.getImageUrl());
                    return dogRepository.save(existingDog);
                })
                .orElse(null);
    }


    public void deleteDog(Long id) {
        dogRepository.deleteById(id);
    }
}