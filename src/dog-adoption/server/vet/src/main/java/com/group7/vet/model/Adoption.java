package com.group7.vet.model;

import jakarta.persistence.*;

@Entity
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String adopterName;
    private String adopterContact;
    private String message;
    private Long dogId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdopterName() {
        return adopterName;
    }

    public void setAdopterName(String adopterName) {
        this.adopterName = adopterName;
    }

    public String getAdopterContact() {
        return adopterContact;
    }

    public void setAdopterContact(String adopterContact) {
        this.adopterContact = adopterContact;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Adoption() {}


    public Adoption(String adopterName, String adopterContact, String message, Long dogId) {
        this.adopterName = adopterName;
        this.adopterContact = adopterContact;
        this.message = message;
        this.dogId = dogId;
    }

    public Long getDogId() {
        return dogId;
    }

    public void setDogId(Long dogId) {
        this.dogId = dogId;
    }
}