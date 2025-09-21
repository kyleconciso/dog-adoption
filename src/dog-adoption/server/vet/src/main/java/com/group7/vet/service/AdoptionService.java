package com.group7.vet.service;

import com.group7.vet.model.Adoption;
import com.group7.vet.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdoptionService {

    private final AdoptionRepository adoptionRepository;

    @Autowired
    public AdoptionService(AdoptionRepository adoptionRepository) {
        this.adoptionRepository = adoptionRepository;
    }

    public Adoption createAdoptionRequest(Adoption adoption) {
        return adoptionRepository.save(adoption);
    }

    public List<Adoption> getAllAdoptions() {
        return adoptionRepository.findAll();
    }

    public Optional<Adoption> getAdoptionById(Long id) {
        return adoptionRepository.findById(id);
    }

    public void deleteAdoption(Long id) {
        adoptionRepository.deleteById(id);
    }
}