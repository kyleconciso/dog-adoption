package com.group7.vet.controller;

import com.group7.vet.model.Adoption;
import com.group7.vet.service.AdoptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/adoptions")
@CrossOrigin(origins = "http://localhost:4200")
public class AdoptionController {

    private final AdoptionService adoptionService;

    @Autowired
    public AdoptionController(AdoptionService adoptionService) {
        this.adoptionService = adoptionService;
    }

    @PostMapping
    public ResponseEntity<Adoption> createAdoptionRequest(@RequestBody Adoption adoption) {
        Adoption newAdoption = adoptionService.createAdoptionRequest(adoption);
        return new ResponseEntity<>(newAdoption, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Adoption>> getAllAdoptions() {
        List<Adoption> adoptions = adoptionService.getAllAdoptions();
        return new ResponseEntity<>(adoptions, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdoption(@PathVariable Long id) {
        adoptionService.deleteAdoption(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}